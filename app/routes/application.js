import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      activities: this.get('store').findAll('activity'),
      foos: this.get('store').findAll('foo'),
      bars: this.get('store').findAll('bar')
    })
  }
})