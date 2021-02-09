public class CampingListController {
  @AuraEnabled
    Public Static List<Camping_Item__c> getItems(){
        List<Camping_Item__c> campingItems = [Select Id, Name, Price__c, Quantity__c from Camping_Item__c];
        return campingItems;
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        upsert item;
        return item;
    }
}