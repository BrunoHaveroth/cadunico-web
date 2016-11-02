import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var that = this;
    this.$('.upload-image').on('change', function() {
      that.renderPreview(Ember.$(this));
    });

    if (this.get('initialImage')) {
      this.set('urlPreview', this.get('initialImage'));
    }
  },

  renderPreview: function(element) {
    var file = element[0].files[0];
    if (!file) { return false; }
    var oFReader = new FileReader();
    oFReader.readAsDataURL(file);
    oFReader.onload = (oFREvent)=> {
      var img = new Image();
      img.src    = oFREvent.target.result;
      img.onload = ()=> {
        if (file.type.includes('image')) {
          this.set('urlPreview', oFREvent.target.result);
          this.set('uploadForm', this.generateForm('avatar', file));
        } else{
          swal("Oops...", "Apenas imagens podem ser salvas", "error");
        }
      };
    };
  },

  generateForm: function(name, file){
    var form = new FormData();
    form.append(name, file);
    return form;
  },

  actions: {
    chooseImage: function() {
      if (this.get('urlPreview')) {
        this.set('urlPreview', null);
        this.set('promiseUpload', null);
      } else {
        this.$('.upload-image').click();
      }
    }
  }
});
