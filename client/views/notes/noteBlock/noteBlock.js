import {Notes} from '/lib/collections/notes.js'
import {Employees} from '/lib/collections/employees.js'

Template.noteBlock.helpers({
    employeeName(){
        return Employees.find({_id: this.employeeId}).fetch()[0].name;
    }
});

Template.noteBlock.events({
    'click .delete'(){
        Notes.remove(this._id);
    }
});