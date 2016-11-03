import Ember from 'ember';
import ajax from 'cadunico-web/utils/ajax';
import swal from 'sweetalert'

export default Ember.Controller.extend({
  createPerson: function(professional) {
    professional
      .save()
      .then(()=> {
        swal('Salvo com sucesso', '', 'success');
        Ember.run.later(()=> {
          this.transitionToRoute('users');
        }, 500);
      });
  },

  actions: {
    startUpload: function(professional) {
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
            professional.set('steganoImage', image);
            this.createPerson(professional);
          }).catch((error)=> {
            swal("Não foi possível salvar sua imagem", error.message, "error");
          });
      }
    }
  }
});
