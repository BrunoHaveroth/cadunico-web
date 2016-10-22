import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  coalesceFindRequests: true,
  host: config.apiBaseUrl,
  shouldReloadAll: function () {
    return true;
  }
});
