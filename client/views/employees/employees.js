import {Employees} from '/lib/collections/employees.js'
import {Modal} from 'meteor/peppelg:bootstrap-3-modal'

Template.employees.events({
    'click .delete'(e){
        Employees.remove(this._id);
    },
    'click .employee-grid'(e){
        Modal.show('employeeModal', this._id.valueOf())
    }

});

Template.employees.helpers({
    employees(){
        return Employees.find({});
    }
});