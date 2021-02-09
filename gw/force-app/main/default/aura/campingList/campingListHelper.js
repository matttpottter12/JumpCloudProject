({	
    
   /* saveItem: function(component, item, callback) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },
   	createItem: function(component, item) {
        this.saveitem(component, item, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
    },*/
	createItem : function(component, item) {
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
		
	}
})