import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
    name: 'mainPage',
    action(params, queryParams) {
        FlowRouter.go('employeeList');
    }
});

FlowRouter.route('/employees', {
    name: 'employeeList',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "employees"});
    }
});

FlowRouter.route('/employees/add', {
    name: 'addEmployee',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "add-employee"});
    }
});

FlowRouter.route('/employees/edit/:_id', {
    name: 'editEmployee',
    action(params, queryParams) {
        var employee = Employees.findOne(params._id);
        BlazeLayout.render("layout", {content: "edit-employee", data: employee});
    }
});


FlowRouter.route('/notes', {
    name: 'notes',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "notes"});
    }
});