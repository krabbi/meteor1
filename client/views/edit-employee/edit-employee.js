/**
 * Created by dread on 12.09.16.
 */

AutoForm.addHooks('employees-edit', {
    after: {
        update: function(error, result) {
            if(!error){
                FlowRouter.go('employeeList');
            }
        }
    }
});

