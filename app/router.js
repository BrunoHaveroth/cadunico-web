import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('not-authorized');
  this.route('users', function() {
    this.route('new');
    this.route('edit', {path: '/:person_id'});
    this.route('show', {path: 'show/:person_id'});
  });
  this.route('professionals', function() {
    this.route('new');
    this.route('edit', {path: 'edit/:user_id'});
  });
});

export default Router;
