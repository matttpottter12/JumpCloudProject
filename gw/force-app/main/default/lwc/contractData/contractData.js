import { LightningElement, api, track, wire} from 'lwc';
import getCDList from '@salesforce/apex/ContractData.getCdList';

export default class ContractData extends LightningElement {
    @api recordId;
    @wire(getCDList, {accountid: '$recordId'}) cds;


}