/**
 * Created by dread on 13.09.16.
 */
import {Employees} from '/lib/collections/employees.js'

Meteor.publish('employees', function(employeeId) {
    return Employees.find({
        '_id': new Mongo.ObjectID(employeeId)
    });
}, {
    url: "api/employee/:0",
    httpMethod: "get"
});