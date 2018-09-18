import { ElementHandle, Page } from 'puppeteer';

export class HomePage {
    public welcomeLogo: ElementHandle;
    public welcomeLogoSelector = 'app-root img';
    private initialied: boolean;

    constructor(private page: Page) {}

    async init() {
        if (!this.initialied) {
            await this.page.goto('http://localhost:4200');
            await this.page.waitForSelector(this.welcomeLogoSelector);
            this.welcomeLogo = await this.page.$(this.welcomeLogoSelector);
            this.initialied = true;
        }
    }
}