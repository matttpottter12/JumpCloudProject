({
	clickCreateItem: function(component, event, helper) {
        var validExpense = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            var item = component.get("v.newItem");
            helper.createItem(component, item);
        }
    },
})