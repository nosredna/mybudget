import {
  SchemaDirectiveVisitor,
  defaultFieldResolver,
  AuthenticationError,
} from 'apollo-server-express';

/* eslint-disable no-param-reassign */
export class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    // this.ensureFieldsWrapped(details.objectType);
    // field._requiredAuthRole = this.args.requires;
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (...args) => {
      const [, , { user }] = args;
      if (!user) {
        throw new AuthenticationError('Must authenticate');
      }
      const result = await resolve.apply(this, args);
      return result;
    };
  }
}
