import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    saveAccount: function (account) {
      account.save()
      .then(()=> {
        $.notify("Salvo com sucesso.", "success");
        this.transitionToRoute('account');
      }, (error)=> {
        $.notify(error.message, "error");
      });
    }
  }
});
