/**
 * Created by dread on 12.09.16.
 */

AutoForm.addHooks('employees-add', {
    after: {
        insert: function(error, result) {
            if(!error){
                FlowRouter.go('employeeList');
            }
        }
    }
});

