import Ember from 'ember';

export default Ember.Component.extend({
  loadMoreAction: 'loadMore',

  sendSearch: function(search) {
    this.get('store')
    .query(this.get('modelName'), {
      customEndPoint: this.get('customEndPoint'),
      filter: search
    })
    .then((clients)=> {
      this.set('model', clients);
      this.set('noLoadMore', true);
    });
  },

  resetModel: function() {
    this.set('skip', 0);
    this.set('model', Ember.A());
    this.sendAction('loadMoreAction');
  },

  actions: {
    searchOnKeyUp : function (search) {
      if (search === '') {
        this.resetModel();
      } else {
        clearTimeout(this.get('searchDelay'));
        this.set('searchDelay', setTimeout(()=> {
          this.sendSearch(search);
        }, 300));
      }
    }
  }
});
