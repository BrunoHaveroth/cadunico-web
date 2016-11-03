import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteUser: function(user, model) {
      swal({
        title: 'Deletar Cadastro',
        text: "Deseja mesmo deletar este Cadastro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim",
        closeOnConfirm: true },
        ()=>{
          user.destroyRecord()
          .then(()=> {
            if (model) {
              model.removeObject(user);
            } else {
              this.transitionTo('professionals');
            }
            swal("Deletado!", "Deletado com sucesso!", "success");
          });
        }
      );
    }
  }
});
