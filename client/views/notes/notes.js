import {Notes} from '/lib/collections/notes.js'


Template.notes.helpers({
    notes(){
        return Notes.find({});
    }
});