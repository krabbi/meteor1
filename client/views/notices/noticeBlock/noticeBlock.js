/**
 * Created by dread on 19.09.16.
 */

import {Notices} from '/lib/collections/notices.js'
import {Employees} from '/lib/collections/employees.js'

var color = 0;


Template.noticeBlock.helpers({
    employeeName(){
        let id =new Mongo.ObjectID(this.employeeId);
        return Employees.find({_id: id}).fetch()[0].name;
    },
    getColor(){
        color = color + 1;
        if(color % 4 === 0){
            color = 0;
            return 'bg-info';
        } else if(color % 3 === 0){
            return 'bg-warning';
        } else if(color % 2 === 0){
            return 'bg-danger';
        } else {
            return 'bg-success';
        }
    }
});

Template.noticeBlock.events({
    'click .delete'(){
        Notices.remove(this._id);
    }
});