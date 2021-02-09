public class AccountHandler {
    
    public static Account insertNewAccount(String Name){
        try{
            Account acct = new Account(Name = Name);
            insert acct;
            return acct;
        } catch (DmlException e) {
            return null;
        }  
    }

}