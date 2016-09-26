import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import {Employees} from '/lib/collections/employees.js'

this.Schems = this.Schems || {};

Schems.notes = new SimpleSchema({
    employeeId: {
        type: String,
        autoform: {
            options: function () {
                return Employees.find().map(function (e) {
                    return {label: e.name, value: e._id.valueOf()};
                });
            }
        }
    },
    note:{
        type: String,
        label: 'Note',
        autoform: {
            rows: 4
        }
    }
});

