import { BeforeAll, Before, After, AfterAll } from "cucumber";
import { Scope } from "./scope";
import { HtmlServer } from "./html-server";

BeforeAll(async function (){
    HtmlServer.start();
})

Before(async function(){
    this.browser = await this.driver.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    Scope.browser = this.browser;
})

After(async function() {
    await this.browser.close();
    Scope.mockResponses.length = 0;
})

AfterAll(async function(){
    HtmlServer.stop();
})