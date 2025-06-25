# AngularSales

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Backend service

The application expects a backend API listening on `https://localhost:5001`. Start the server for your backend implementation so the Angular app can POST cart items and receive totals. A typical workflow when using the provided ASP.NET service is:

1. Navigate to the backend project folder.
2. Run `dotnet run`.
3. Verify that `https://localhost:5001` responds in your browser or via `curl`.

If your API runs on a different URL, update `src/environments/environment.ts` accordingly:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://your-api-host'
};
```

The same value is also defined in `environment.prod.ts` for production builds.

You can test the backend with a request similar to the following:

```bash
curl -k -X POST https://localhost:5001/GetCartResponse \
  -H "Content-Type: application/json" \
  -d '{"items": ["1 book at 12.49", "1 music CD at 14.99"]}'
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
