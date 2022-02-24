import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdoUR1XmpkAlHRuMQT8Pl_0rkujufq6RQ",
  authDomain: "fire-todo-b5108.firebaseapp.com",
  projectId: "fire-todo-b5108",
  storageBucket: "fire-todo-b5108.appspot.com",
  messagingSenderId: "947284540395",
  appId: "1:947284540395:web:df33fba46da8ae680237ae",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
