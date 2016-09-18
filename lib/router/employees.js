/**
 * Created by dread on 12.09.16.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
    name: 'mainPage',
    action(params, queryParams) {
        FlowRouter.go('employeeList');
    }
});

var employeesRoutes = FlowRouter.group({
    prefix: '/employees'
});

employeesRoutes.route('/', {
    name: 'employeeList',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "employees"});
    }
});

FlowRouter.route('/add', {
    name: 'addEmployee',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "add-employee"});
    }
});

employeesRoutes.route('/edit/:_id', {
    name: 'editEmployee',
    action(params, queryParams) {
        var employee = Employees.findOne(new Mongo.ObjectID(params._id));
        BlazeLayout.render("layout", {content: "edit-employee", data: employee});
    }
});


FlowRouter.route('/notices', {
    name: 'notices',
    action(params, queryParams) {
        BlazeLayout.render("layout", {content: "notices"});
    }
});