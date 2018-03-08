// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCsakDia9tHLhGqhzCsTEpQkLDBfd3LUT4",
    authDomain: "ng-fire-com.firebaseapp.com",
    databaseURL: "https://ng-fire-com.firebaseio.com",
    projectId: "ng-fire-com",
    storageBucket: "",
    messagingSenderId: "77366479678"
  }
};
