import { Employees } from '../lib/collections/employees.js'
import {Notices} from '/lib/collections/notices.js'

window.Employees = Employees;
window.Notices = Notices;



/*
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

*/
