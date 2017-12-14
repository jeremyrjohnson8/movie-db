// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAY4A7dVcLXsBHUi2sNxC2AtxFrkdKB3Hs",
    authDomain: "movie-app-f2d08.firebaseapp.com",
    databaseURL: "https://movie-app-f2d08.firebaseio.com",
    projectId: "movie-app-f2d08",
    storageBucket: "movie-app-f2d08.appspot.com",
    messagingSenderId: "80154320225"
  }
};
