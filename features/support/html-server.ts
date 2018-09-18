import * as httpShutdown from 'http-shutdown';
import * as express from 'express';
import * as parser from 'body-parser';
import * as httpProxy from 'http-proxy-middleware';
import { onResponse, onRequest } from './mock-api';

export class HtmlServer {
    public static html = __dirname + '/../../dist';
    public static port = 4200;
    public static server: any;
    static app = express();
    public static proxy = {
        target: 'http://localhost:3000',
        pathRewrite: { '^/back-end': 'back-end/api' },
        secure: false,
        onProxyRes: onResponse,
        onProxyReq: onRequest
    };

    constructor(){}

    public static start(): void {
        if (!this.server) {
            this.server = httpShutdown(this.app
            .use('/back-end', httpProxy(HtmlServer.proxy))
            .use(parser.json())
            .use(express.static(HtmlServer.html))
            .use(parser.text({ type: 'text/plain' }))
            .use(parser.urlencoded({ extended: true }))
            .listen (HtmlServer.port, function() {
                console.log('Port: ', HtmlServer.port);
                console.log('Html: ', HtmlServer.html);
                })
            );
        }
    }

    public static stop() {
        if (this.server) {
            this.server.shutdown();
        }
    }
}