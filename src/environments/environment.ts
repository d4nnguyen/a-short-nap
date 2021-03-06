// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD8RTY6X8Lr65weho0nWWIAHSJ92-65LTs",
    authDomain: "a-short-nap.firebaseapp.com",
    databaseURL: "https://a-short-nap.firebaseio.com",
    projectId: "a-short-nap",
    storageBucket: "a-short-nap.appspot.com",
    messagingSenderId: "879877696188"
  }
};
