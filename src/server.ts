import {app} from './app';
import * as firebase from 'firebase';

const port = process.env.PORT || 8000

const firebaseConfig = {
    apiKey: "AIzaSyC8-4dRpyf9DZphrb1ejrE1HaQym4pM2ow",
    authDomain: "servidorts-2bb74.firebaseapp.com",
    databaseURL: "https://servidorts-2bb74-default-rtdb.firebaseio.com",
    projectId: "servidorts-2bb74",
    storageBucket: "servidorts-2bb74.appspot.com",
    messagingSenderId: "66507653258",
    appId: "1:66507653258:web:7bc9212dc4278debca2d73"
  };

  try{
    firebase.initializeApp(firebaseConfig)
    console.log('Firebase initialized successfully')
  }catch(e){
    console.log('Failed', e);
  }  

const server=app.listen(port,() => {
    console.log('listening on port', port);    
})

process.on('SIGINT', () => {
    server.close();
})
