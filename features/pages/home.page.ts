import { async } from '@angular/core/testing';
import { ElementHandle, Page } from 'puppeteer';

export class HomePage {
    public welcomeLogo: ElementHandle;
    public welcomeLogoSelector = 'app-root img';
    private initialied: boolean;

    constructor(private page: Page) {}

    async loadHomePage() {
        if (!this.initialied) {
            await this.page.goto('http://localhost:4200');
            await this.page.waitForSelector(this.welcomeLogoSelector);
            this.welcomeLogo = await this.page.$(this.welcomeLogoSelector);
            this.initialied = true;
        }
    }

    async getWelcomeLogo(): Promise<ElementHandle> {
        return this.page.$(this.welcomeLogoSelector);
    }

    async getWelcomeLogoAltText(): Promise<String> {
        return this.page.evaluate(element => element.alt, await this.getWelcomeLogo());
    }
}