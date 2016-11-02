import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deletePerson: function(person, model) {
      swal({
        title: 'Deletar Cadastro',
        text: "Deseja mesmo deletar este Cadastro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim",
        closeOnConfirm: true },
        ()=>{
          person.destroyRecord()
          .then(()=> {
            if (model) {
              model.removeObject(person);
            } else {
              this.transitionTo('users');
            }
            swal("Deletado!", "Deletado com sucesso!", "success");
          });
        }
      );
    }
  }
});
