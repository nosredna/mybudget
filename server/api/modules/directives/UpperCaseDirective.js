import {
  SchemaDirectiveVisitor,
  defaultFieldResolver,
} from 'apollo-server-express';

/* eslint-disable no-param-reassign */
export class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (...args) => {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}
