import { MockResponse } from './scope';
 import { Browser } from 'puppeteer';

 export class Scope {
     public static browser: Browser;
     public static driver: any;
     public static page: any;
     public static pageObject: any;
     public static mockResponses: MockResponse[] = [];

     constructor(){}

     public static addMockResponse(httpMethod: string, url: RegExp, data: Object) {
         Scope.mockResponses.push({ httpMethod, url, data });
     }
 }

 export interface MockResponse {
    httpMethod: string;
    url: RegExp;
    data: Object;
 }