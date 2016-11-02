import Ember from 'ember';
import ajax from 'cadunico-web/utils/ajax';
import swal from 'sweetalert'

export default Ember.Controller.extend({
  createPerson: function(person) {
    person
      .save()
      .then(()=> {
        swal('Salvo com sucesso', '', 'success');
        Ember.run.later(()=> {
          this.transitionToRoute('users');
        }, 500);
      });
  },

  actions: {
    startUpload: function(person) {
      var uploadForm = this.get('uploadForm');
      var headers  = {contentType: false, processData: false};

      if (uploadForm) {
        ajax
          .post(
            '/people/upload',
            uploadForm,
            headers
          )
          .then((image)=> {
            person.set('steganoImage', image);
            this.createPerson(person);
          }).catch((error)=> {
            swal("Não foi possível salvar sua imagem", error.message, "error");
          });
      }
    }
  }
});
