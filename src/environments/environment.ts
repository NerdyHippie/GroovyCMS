// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false
  ,name: 'Development'
  ,firebaseConfig: {
		apiKey: "AIzaSyDmxoRu5f4JTs3B6qFa_zPd1gKG_954Yhc",
		authDomain: "groovycms-dev.firebaseapp.com",
		databaseURL: "https://groovycms-dev.firebaseio.com",
		storageBucket: "groovycms-dev.appspot.com",
		messagingSenderId: "1007666831090"
  }
};