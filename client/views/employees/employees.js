import {Employees} from '/lib/collections/employees.js'
import {Notes} from '/lib/collections/notes.js'
import {Modal} from 'meteor/peppelg:bootstrap-3-modal'

var department = new ReactiveVar();

Template.employees.onCreated(function(){
    //department.set('Sales');
});

Template.employees.events({
    'click .delete'(e){
        let notes = Notes.find({employeeId: this._id}).fetch();
        notes.forEach(function(note){
            Notes.remove(note._id);
        });
        Employees.remove(this._id);
    },
    'click .employee-grid'(e){
        //check for dropdown button
        if(e.target.parentNode.classList.contains('dropdown') || e.target.parentNode.parentNode.classList.contains('dropdown-menu')) {
            return;
        } else {
            Modal.show('employeeModal', this._id)
        }
    },
    'click .department-nav li a'(e){
        var dep = $(e.target).attr("data-department");
        department.set(dep);
    }
});

Template.employees.helpers({
    employees(){
        if(!department.get() || department.get() === 'all'){
            return Employees.find();
        } else {
            return Employees.find({department: department.get()});
        }
    },
    departments(){
        return ['IT', 'Billing', 'Sales', 'Product Management', 'Support', 'HR'];
    }
});