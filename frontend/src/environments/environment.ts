// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://ucode-ml.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyCFjy3JblzX6swC4xcYr5QD-cj1E9UlRA8',
    authDomain: 'practicantes-ucode.firebaseapp.com',
    databaseURL: 'https://practicantes-ucode.firebaseio.com',
    projectId: 'practicantes-ucode',
    storageBucket: 'practicantes-ucode.appspot.com',
    messagingSenderId: '248363642908'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
