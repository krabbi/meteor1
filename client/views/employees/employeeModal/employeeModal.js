let employee = new ReactiveVar;

Template.employeeModal.created = function() {
    let url = 'api/employee/' + this.data;
    $.ajax({
        method: "GET",
        url: url
    })
        .done(function( msg ) {
            employee.set(msg.employees[0]);
            console.log(employee.get());
        });
};

Template.employeeModal.helpers({
    employee(){
        return employee.get();
    }
});