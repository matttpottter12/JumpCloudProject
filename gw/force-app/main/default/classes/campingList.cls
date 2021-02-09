public class campingList {
    @AuraEnabled
    Public Static List<Camping_Item__c> getItems(){
        List<Camping_Item__c> campingItems = [Select Id, Name, Price__c, Quantity__c from Camping_Item__c];
        return campingItems;
    }
}