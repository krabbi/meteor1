import { Employees } from '../lib/collections/employees.js'
import {Notes} from '/lib/collections/notes.js'

window.Employees = Employees;
window.Notes = Notes;



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
