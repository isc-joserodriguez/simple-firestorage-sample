import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: 'AIzaSyCF3YHk1WpBEQT9ILzBq7EiIoBN70EVBKU',
  authDomain: 'ejemplo-firestorage.firebaseapp.com',
  projectId: 'ejemplo-firestorage',
  storageBucket: 'ejemplo-firestorage.appspot.com',
  messagingSenderId: '885665102222',
  appId: '1:885665102222:web:e528a43b030672f8514cdf',
});

export const storage = getStorage();
