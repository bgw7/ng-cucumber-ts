import { Predicate } from '@angular/core';
import { IncomingMessage, ServerResponse, ClientRequest } from "http";
import { Scope, MockResponse } from "./scope";
import * as modifyResponse from 'node-http-proxy-json';

export function onResponse(proxyRes: IncomingMessage, request: IncomingMessage, response: ServerResponse): void {
    let mock = Scope.mockResponses.find(m => shouldMockResponse(request, m));
    match(mock).on(isNotUndefined, mockResponse, [response, proxyRes, mock]);
}
export function onRequest(proxyRes: ClientRequest, request: IncomingMessage, response: ServerResponse): void {}

function shouldMockResponse(api: IncomingMessage, mock: MockResponse): boolean {
    return api.method === mock.httpMethod && mock.url.test(api.url);
}

function isNotUndefined(value: any): boolean {
    return !(typeof value === 'undefined');
}

function mockResponse(res: ServerResponse, proxyRes: IncomingMessage, mock: MockResponse) {
    delete proxyRes.headers['content-length'];

    return modifyResponse(res, proxyRes.headers['content-encoding'], body => {
        if (body) {
            body = mock.data;
        }
        return body;
    });
}

const matched = _case => ({
    on: () => matched(_case),
    otherwise: () => _case,
});

const match = _case => ({  
    on: (predicate: Predicate<any>, callBack: Function, args: any[]) => (predicate(_case) ? matched(callBack(...args)) : match(_case)),
    otherwise: fn => fn(_case),
});