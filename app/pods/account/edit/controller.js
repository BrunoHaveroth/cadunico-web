import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  userId: 0,
  init: function () {
    this.get('ajax').request('/users', {
      method: 'get'
    }).then((response)=> {
      if (response) {
        this.set('response', response);
      } else {
        $.notify('Não há nenhum registro para esta data', 'error');
      }
    }).catch((err)=> {
      $.notify( err.message , 'error');
    });
  },

  actions: {
    selectionsChanged: function(selection, component){
      this.set('userId', component.value);
    },

    addUser: function () {
      var model = this.get('model');

      this.store.find('user',this.get('userId')).then(data=>{
        model.get('users').pushObject(data);

        model.save().then(() =>{
          $.notify('Salvo com sucesso.', "success");
        },(err) =>{
          $.notify(err.message, 'error');
        });
      });
    }
  }
});
