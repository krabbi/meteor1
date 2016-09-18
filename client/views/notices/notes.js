/**
 * Created by dread on 19.09.16.
 */
import {Notes} from '/lib/collections/notes.js'


Template.notes.helpers({
    notes(){
        return Notes.find({});
    }
});