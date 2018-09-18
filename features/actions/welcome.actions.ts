import { Scope } from '../support/scope';
import { HomePage } from '../pages/home.page';
import { expect } from 'chai';

export async function openHomePage() {
    Scope.page = await Scope.browser.newPage();
    Scope.pageObject = new HomePage(Scope.page);
    await Scope.pageObject.init();
    expect(await Scope.pageObject.welcomeLogo).to.not.be.null;
}

export async function confirmLogo(expectedLogo: string) {
    let actualLogo = await Scope.page.evaluate(element => element.alt, Scope.pageObject.welcomeLogo);
    expect(actualLogo).to.equal(expectedLogo);
}