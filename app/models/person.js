import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  // ADDRESS
  city            : attr('string'),
  zipCode         : attr('string'),
  locality        : attr('string'),
  publicPlace     : attr('string'),
  complement      : attr('string'),

  // CHARACTERISTICS OF HOUSEHOLD
  characteristics : attr('string'),
  typeHousehold   : attr('string'),
  typeWaterSupply : attr('string'),
  toiletBathroom  : attr('string'),
  lightingUsed    : attr('string'),

  // FAMILY
  familyType      : attr('string'),

  //IDENTIFICATION OF THE PERSON
  fullName        : attr('string'),
  gender          : attr('string'),
  skinColor       : attr('string'),
  motherName      : attr('string'),
  fatherName      : attr('string'),

  steganoImage      : attr('string'),
});
