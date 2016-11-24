import Ember from 'ember';

export default Ember.Controller.extend({
  skip: 0,
  limit: 10,
  actions: {
    loadMore: function() {
      var limit = this.get('limit');
      var skip = this.get('skip');

      var query = {
        sort: 'createdAt DESC',
        skip: skip,
        limit: limit
      };

      this.set('loading', true);
      this.store.query('person', query)
      .then((records)=> {
        this.set('model', records);
        this.set('loading', false);
        if (records.get('content.length') < limit) {
          this.set('noLoadMore', true);
        } else {
          this.set('noLoadMore', false);
        }
      }).catch((error)=> {
        sweetAlert("Não foi possível buscar mais registros", error.message, "error");
        this.set('loading', false);
      });

      this.incrementProperty('limit', 10);
    }
  }
});
