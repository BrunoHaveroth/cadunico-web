import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query: function(store, type, query) {
    var endPointCustom = query.endPointCustom ? '/' + query.endPointCustom : '/leads';
    var confirmationsUrl = this.host + endPointCustom;
    delete query.endPointCustom;
    return this.ajax(confirmationsUrl, 'GET', { data: query });
  }
});
