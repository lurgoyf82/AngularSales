# AngularSales

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Prerequisites

Make sure you have **Node.js 18+** installed. Angular 17 requires at least Node 18 and also works on Node 20.

Install project dependencies with:

```bash
npm install
```

## Development server

Run `npm start` (which runs `ng serve`) for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend configuration

The application expects a backend URL to be defined in `src/environments/environment.ts`. Create the file if it doesn't exist and export the `environment` object with your API URL:

```ts
export const environment = {
  backendUrl: 'http://localhost:3000',
  production: false,
};
```

For a production build, create `src/environments/environment.prod.ts` with `production: true` and the appropriate `backendUrl`. You can then use `fileReplacements` in `angular.json` to swap these files when building for production.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
