import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name            : attr('string'),
  email           : attr('string'),
  password        : attr('string'),
  role           : attr('string', { defaultValue: 'professional' }),
  confirmPassword : attr('string'),

  steganoImage      : attr('string'),
  updateSteganoImage : attr('string')
});
