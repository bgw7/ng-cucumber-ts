import { setDefaultTimeout, setWorldConstructor, World } from 'cucumber';
import { Browser } from 'puppeteer';
import * as puppeteer from 'puppeteer';
import { Scope } from "./scope";

declare module 'cucumber' {
    interface World {
        driver: any,
        browser: Browser
    }
}

setWorldConstructor(function(init) {
    this.driver = puppeteer;
    Scope.driver = this.driver;
});

setDefaultTimeout(60 * 1000);