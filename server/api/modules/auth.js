import expressJwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import request from 'request-promise-native';
import config from '../../config';
import { User } from '../resources/user';

const checkToken = expressJwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`,
  }),
  credentialsRequired: false, // allow chain to continue if auth fails

  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ['RS256'],
});

export const decodeToken = () => (req, res, next) => {
  if (config.disableAuth) {
    return next();
  }
  // make it optional to place token on query string
  // if it is, place it on the headers where it should be
  // so checkToken can see it. See follow the 'Bearer 034930493' format
  // so checkToken can see it and decode it
  if (
    req.query &&
    Object.prototype.hasOwnProperty.call(req.query, 'access_token')
  ) {
    req.headers.authorization = `Bearer ${req.query.access_token}`;
  }

  // this will call next if token is valid
  // and send error if its not. It will attached
  // the decoded token to req.user
  return checkToken(req, res, next);
};

export const checkRole = role => (req, res, next) => {
  const assignedRoles = req.user['http://localhost:3000/roles'];
  if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
    return next();
  }
  return res.status(401).send('Insufficient role');
};

export const addTokenToReq = () => (req, res, next) => {
  if (req.user) {
    [, req.token] = req.headers.authorization.split(' ');
  }
  next();
};

export const getUserInfo = token => {
  const options = {
    method: 'GET',
    url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
    headers: { authorization: `Bearer ${token}` },
    json: true,
  };

  return request(options);
};

const checkDatabaseUser = () => (req, res, next) => {
  if (!req || !req.user) {
    next();
    return;
  }

  User.findOne({ authId: req.user.sub })
    .then(foundUser => {
      if (foundUser) {
        return foundUser;
      }

      return getUserInfo(req.token).then(userinfo => {
        const {
          sub: authId,
          name: fullName,
          given_name: givenName,
          family_name: lastName,
          email,
          email_verified: emailVerified,
        } = userinfo;

        const firstName = givenName || email.split('@')[0];
        const name = fullName || `${firstName} ${lastName}`.trim();

        const newUser = {
          authId,
          name,
          firstName,
          lastName,
          email,
          emailVerified,
        };

        return User.create(newUser).then(createdUser => createdUser);
      });
    })
    .then(foundUser => {
      req.user = foundUser;
      next();
    })
    .catch(() => {
      next();
    });
};

export const protect = [decodeToken(), addTokenToReq(), checkDatabaseUser()];
