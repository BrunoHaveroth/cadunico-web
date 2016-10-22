import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('campaign', function() {
    this.route('new');
    this.route('show', {path: 'show/:campaign_id'});
    this.route('edit', {path: '/:campaign_id'});
  });
  this.route('not-authorized');
  this.route('agency', function() {
    this.route('edit');
    this.route('show');
    this.route('new');
  });
  this.route('account', function() {
    this.route('edit', {path: '/:account_id'});
    this.route('new');
    this.route('show', {path: 'show/:account_id'});
  });
});

export default Router;
