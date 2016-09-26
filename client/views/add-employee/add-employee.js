AutoForm.addHooks('employees-add', {
    after: {
        insert: function(error, result) {
            if(!error){
                FlowRouter.go('employeeList');
            }
        }
    }
});

