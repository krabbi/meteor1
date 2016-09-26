import {Employees} from '/lib/collections/employees.js'

Meteor.publish('employees', function(employeeId) {
    return Employees.find({
        '_id': employeeId
    });
}, {
    url: "api/employee/:0",
    httpMethod: "get"
});