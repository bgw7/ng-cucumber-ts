 import { Browser } from 'puppeteer';

 export class Scope {
     public static browser: Browser;
     public static driver: any;
     public static page: any;
     public static pageObject: any;
     public static mockResponse: { method: string, url: RegExp, data: Object };

     constructor(){}
     public static setMockResponse(method: string, url: RegExp, data: Object) {
         Scope.mockResponse = { method, url, data };
     }
 }