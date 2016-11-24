import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  coalesceFindRequests: true,
  host: config.apiBaseUrl,
  shouldReloadAll: function () {
    return true;
  },

  query: function(store, type, query) {
    var typeModel = '/' + type.toString().split(':')[1];
    typeModel = Ember.String.pluralize(typeModel);
    typeModel = Ember.String.camelize(typeModel);

    var customEndPoint   = query.customEndPoint ? '/' + query.customEndPoint : typeModel;
    var confirmationsUrl = this.host + customEndPoint;
    delete query.customEndPoint;

    return this.ajax(confirmationsUrl, 'GET', { data: query });
  }
});
