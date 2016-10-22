import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:token';
      this.get('session').authenticate(authenticator, credentials)
      .then( () => {
      	this.transitionToRoute('index');
      })
      .catch( (error) => {
      	$.notify(error.message, "error");
      });
    }
  }
});
