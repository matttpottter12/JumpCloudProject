import { LightningElement, api, track, wire} from 'lwc';
import getexDsList from '@salesforce/apex/ContractData.getexDsList';


export default class ExternalData extends LightningElement {
    @api recordId;
    @wire(getexDsList, {accountid: '$recordId'}) exDs;
}