import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  action: 'logout',
  didInsertElement: function () {
    var role = this.get('session.data.authenticated.role');
    this.set('isAgencyAdmin', false);
    this.set('isAdmin', false);
    if (role === 'agencyAdmin') {
      this.set('isAgencyAdmin', true)
    }
    if (role === 'admin') {
      this.set('isAdmin', true)
    }
  },
  actions: {
    sendLogout: function() {
      this.sendAction('action');
    }
  }

});
