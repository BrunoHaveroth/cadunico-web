import Ember from 'ember';

export default Ember.Component.extend({
  actionLoadMore:  'loadMore',

  didInsertElement: function() {
    this.resetConfigs();
    this.sendAction('actionLoadMore');
  },

  resetConfigs: function() {
    this.set('model', Ember.A());
    this.set('skip', 0);
  },

  actions: {
    loadMore: function() {
      this.sendAction('actionLoadMore');
    }
  }
});
