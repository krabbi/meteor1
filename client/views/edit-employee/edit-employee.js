AutoForm.addHooks('employees-edit', {
    after: {
        update: function(error, result) {
            if(!error){
                FlowRouter.go('employeeList');
            }
        }
    }
});

