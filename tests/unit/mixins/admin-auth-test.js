import Ember from 'ember';
import AdminAuthMixin from 'cadunico-web/mixins/admin-auth';
import { module, test } from 'qunit';

module('Unit | Mixin | admin auth');

// Replace this with your real tests.
test('it works', function(assert) {
  let AdminAuthObject = Ember.Object.extend(AdminAuthMixin);
  let subject = AdminAuthObject.create();
  assert.ok(subject);
});
