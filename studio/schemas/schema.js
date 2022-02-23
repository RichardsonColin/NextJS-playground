import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// document schemas
import portfolioImage from './documents/portfolioImage';
import review from './documents/review';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([portfolioImage, review]),
});
