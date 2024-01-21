export default class Branch{
    //the Branch Model i allow the fields to be null because i see that there are branches that dont have all the properties
    constructor(
    public store_id:number,
    public store_region?:string,
    public store_title?: string,
    public store_address?:string,
    public store_phone?:string,
    public gps_location?:string,
    public emp_in_need?:boolean,
    public emp_interview?:string,
    public emp_contact?:string,
    public features?:number,
    public city?:string,
    public zip_code?:string
    ){
    }
}