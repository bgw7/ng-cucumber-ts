import { Given, When, Then } from 'cucumber';
import { openHomePage, confirmLogo } from '../actions/welcome.actions';

When('I open the home page', openHomePage);
Then('I am welcomed with the {string}', confirmLogo);