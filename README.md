# NgCucumberTs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Cucumber Tests

The cucumber tests depend on a production build of static files in the /dist directory.
```bash
npm run ng build --prod
npm run cuke
```

[html-server.ts](https://github.com/bgw7/ng-cucumber-ts/blob/master/features/support/html-server.ts) serves the static content on port 4200

[hooks.ts](https://github.com/bgw7/ng-cucumber-ts/blob/master/features/support/hooks.ts) opens a headless chromium browser using puppeteer.
Set **headless** to false to watch the tests run locally
```javascript
this.browser = await this.driver.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
