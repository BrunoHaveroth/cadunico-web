import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  action: 'logout',
  transitionAction: 'transition',

  didInsertElement: function () {
    // var role = this.get('session.data.authenticated.role');
  },
  actions: {
    sendLogout: function() {
      this.sendAction('action');
    },

    transitionNew: function(route) {
      this.sendAction('transitionAction', route);
    }
  }

});
