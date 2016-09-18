/**
 * Created by dread on 19.09.16.
 */
import {Notices} from '/lib/collections/notices.js'


Template.notices.helpers({
    notices(){
        return Notices.find({});
    }
});