import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service('session'),
  setupController: function(controller, model) {
    var role = this.get('session.data.authenticated.role');
    if (role !== 'admin') {
      controller.transitionToRoute('not-authorized');
    }
  }
});
