import {Employees} from '/lib/collections/employees.js'
import {Notices} from '/lib/collections/notices.js'
import {Modal} from 'meteor/peppelg:bootstrap-3-modal'

Template.employees.events({
    'click .delete'(e){
        let notices = Notices.find({employeeId: this._id.valueOf()}).fetch();
        notices.forEach(function(notice){
            Notices.remove(notice._id);
        });
        Employees.remove(this._id);
    },
    'click .employee-grid'(e){
        //check for dropdown button
        if(e.target.parentNode.classList.contains('dropdown') || e.target.parentNode.parentNode.classList.contains('dropdown-menu')) {
            return;
        } else {
            Modal.show('employeeModal', this._id.valueOf())
        }
    }

});

Template.employees.helpers({
    employees(){
        return Employees.find({});
    }
});