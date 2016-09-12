import { Template } from 'meteor/templating';
import { Objects } from '/lib/collections/objects.js'

import './main.html';


Template.hello.helpers({
  counter:function() {
    return Objects.find({}).count();
  }
});

Template.hello.events({
  'click button': function(event, instance) {
    // increment the counter when button is clicked
    Objects.insert({});
  }
});
