import Ember from 'ember';
import AgencyAdminMixin from 'cadunico-web/mixins/agency-admin';
import { module, test } from 'qunit';

module('Unit | Mixin | agency admin');

// Replace this with your real tests.
test('it works', function(assert) {
  let AgencyAdminObject = Ember.Object.extend(AgencyAdminMixin);
  let subject = AgencyAdminObject.create();
  assert.ok(subject);
});
