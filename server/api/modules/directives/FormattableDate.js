import formatDate from 'dateformat';
import {
  SchemaDirectiveVisitor,
  defaultFieldResolver,
  GraphQLString,
} from 'apollo-server-express';

/* eslint-disable no-param-reassign */
export class FormattableDateDirective extends SchemaDirectiveVisitor {
  visitField(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    // Add an additional `format` argument to the field:
    field.args.push({
      name: 'format',
      type: GraphQLString,
    });

    field.resolve = async (source, { format, ...otherArgs }, context, info) => {
      // Call the original resolver function to get the Date
      // object to be formatted:
      const date = await resolve.call(this, source, otherArgs, context, info);

      // If a format argument was not provided, default to the
      // optional defaultFormat argument taken by the directive:
      return formatDate(date, format || defaultFormat);
    };

    // Update the result type of the field, since now it returns
    // a String instead of a Date:
    field.type = GraphQLString;
  }
}
