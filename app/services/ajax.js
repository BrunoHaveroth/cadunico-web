import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  session: Ember.inject.service(),
  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {contentType: false, processData: false};
      let authToken = this.get('session.data.authenticated.access_token');
      if (authToken) {
        headers['Authorization'] = 'Bearer ' + authToken;
      }
      return headers;
    }
  }),
  host: config.apiBaseUrl
});
