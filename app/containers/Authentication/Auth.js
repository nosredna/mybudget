import auth0 from 'auth0-js';

const REQUESTED_SCOPES = 'openid profile email read:courses';

const auth0Client = new auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  responseType: 'token id_token',
  scope: REQUESTED_SCOPES,
});

export function handleAuthentication() {
  return new Promise((resolve, reject) => {
    auth0Client.parseHash((err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      const { idToken, accessToken, idTokenPayload: profile } = authResult;
      // set the time that the id token will expire at
      const expiresAt = profile.exp * 1000 + Date.now();
      return resolve({
        authenticated: true,
        idToken,
        accessToken,
        profile,
        expiresAt,
      });
    });
  });
}

export function login() {
  auth0Client.authorize();
}

export function logout() {
  auth0Client.logout({
    returnTo: 'http://localhost:3000',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });
}

export function renewToken() {
  return new Promise((resolve, reject) => {
    auth0Client.checkSession({}, (err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      const { idToken, accessToken, idTokenPayload: profile } = authResult;
      // set the time that the id token will expire at
      const expiresAt = profile.exp * 1000 + Date.now();
      return resolve({
        authenticated: true,
        idToken,
        accessToken,
        profile,
        expiresAt,
      });
    });
  });
}
