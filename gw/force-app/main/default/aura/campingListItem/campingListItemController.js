({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
	packItem : function(component, event, helper) {
        console.log('component', component);
		component.set("v.item.Packed__c", 'true');
        //component.set("v.disable", 'true');
        event.getSource().set("v.disabled", true);
	}
})