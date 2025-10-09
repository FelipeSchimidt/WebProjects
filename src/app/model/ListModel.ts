export class ListModel {
    public title: string;
    public description?: string;
    public attachment?: string;
    
    constructor(){
        this.title = "";
        this.description = "";
        this.attachment = "";
    }
}