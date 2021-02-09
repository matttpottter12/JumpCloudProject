({
	doInit : function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function(data) {
            console.log('Data', data.getReturnValue());
        	component.set("v.items", data.getReturnValue());       
        });
		$A.enqueueAction(action);
        /*var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        console.log('vars', vars);*/
       // return vars;
	},
    handleAddItem: function(component, event, helper) {
        var item = event.getParam("item");
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            } else {
                console.log('state', state);
            }
        });
        $A.enqueueAction(action);
		
    },

})