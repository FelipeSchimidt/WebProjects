import { HttpClient } from "@angular/common/http"; 

export class Services {
    constructor(public http: HttpClient) {

        const baseUrl = 'http://localhost:5261/';

        /*
         * getList
         */
        function getList(this: any) {
            return this.http.get('baseUrl');
        }

    }
}