({
    createExpense: function(component, event, helper) {
        var validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            var expense = component.get("v.newExpense");
            helper.createExpense(component, expense);
        }
    },
})