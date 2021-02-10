public with sharing class ContractData {
    @AuraEnabled(cacheable=true)
    public static List<Contract_Data__c> getCdList(string accountid) {
        return [
            SELECT Id, Name, Review_Date__c
            FROM Contract_Data__c
            WHERE Account__c = :accountId
        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<External_Data__c> getexDsList(string accountid) {
        return [
            SELECT Id, Name
            FROM External_Data__c
            WHERE Account__c = :accountId
        ];
    }
}