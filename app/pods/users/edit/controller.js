import Ember from 'ember';
import ajax from 'cadunico-web/utils/ajax';
import swal from 'sweetalert'

export default Ember.Controller.extend({
  actions: {
    save: function(person) {
      person
        .save()
        .then(()=> {
          swal('Salvo com sucesso', '', 'success');
          Ember.run.later(()=> {
            this.transitionToRoute('users');
          }, 500);
        });
    }
  }
});
