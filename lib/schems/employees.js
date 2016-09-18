/**
 * Created by dread on 12.09.16.
 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

this.Schems = this.Schems || {};

Schems.employees = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    department: {
        type: String,
        label: 'Department'
    },
    job: {
        type: String,
        label: 'Job Title'
    },
    phone: {
        type: [String],
        regEx: /^812\.425\.\d{4}$/,
        label: 'Phone number',
        autoform: {
            placeholder: "812.425.XXXX"
        }
    },
    "phone.$": {
        type: String,
        autoform: {
            placeholder: "812.425.XXXX"
        }
    },
    address:{
        type: String,
        label: 'Address'
    },
    email:{
        type: [String],
        regEx: SimpleSchema.RegEx.Email,
        label: 'Email'
    },
    biography:{
        type: String,
        label: 'Biography',
        autoform: {
            rows: 6
        }
    },
    other_contact:{
        type: String,
        optional: true
    }
});

