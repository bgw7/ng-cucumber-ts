import { Scope } from '../support/scope';
import { HomePage } from '../pages/home.page';
import { expect } from 'chai';

export async function openHomePage() {
    Scope.page = await Scope.browser.newPage();
    Scope.pageObject = new HomePage(Scope.page);
    await Scope.pageObject.loadHomePage();
}

export async function confirmLogo(expectedLogo: string) {
    expect(await Scope.pageObject.getWelcomeLogo()).to.not.be.null;
    expect(await Scope.pageObject.getWelcomeLogoAltText()).to.equal(expectedLogo);
}