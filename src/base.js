import * as firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyCWQgYh501TCqhx_O58BTwSYbWTpO6SDK0',
  authDomain: 'chingu-journal-dc503.firebaseapp.com',
  databaseURL: 'https://chingu-journal-dc503.firebaseio.com/',
  projectId: 'chingu-journal-dc503',
  storageBucket: 'chingu-journal-dc503.appspot.com',
  messagingSenderId: '381723948102',
  appId: '1:381723948102:web:c7876a0777a2ab56'
};

const app = firebase.initializeApp(firebaseConfig);

export { app };
