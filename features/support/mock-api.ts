import { IncomingMessage, ServerResponse, ClientRequest } from "http";
import { Scope } from "./scope";
const modifyResponse = require('node-http-proxy-json');


export function onResponse(proxyRes: IncomingMessage, req: IncomingMessage, res: ServerResponse): void {
    if(this.shouldMock(req)) {
        return this.mockResponse(res, proxyRes);
    }
}
export function onRequest(proxyRes: ClientRequest, req: IncomingMessage, res: ServerResponse): void {}

function shouldMock(api: IncomingMessage): boolean {
    return !!Scope.mockResponse && api.method === Scope.mockResponse.method && Scope.mockResponse.url.test(api.url);
}
function mockResponse(res: ServerResponse, proxyRes: IncomingMessage) {
    return modifyResponse(res, proxyRes, body => {
        if (body) {
            body = Scope.mockResponse.data;
        }
        return body;
    });
}