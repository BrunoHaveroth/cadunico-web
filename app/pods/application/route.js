import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    } 
  },

  actions: {
    logout: function() {
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
