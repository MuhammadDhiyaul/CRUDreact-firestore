import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCEvG_CE5-MsdIuEejnGn9v5hEi_DowwtE",
  authDomain: "reactfirestore-96c75.firebaseapp.com",
  projectId: "reactfirestore-96c75",
  storageBucket: "reactfirestore-96c75.appspot.com",
  messagingSenderId: "783582225381",
  appId: "1:783582225381:web:f3ff3ff3d307932462c50c"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
