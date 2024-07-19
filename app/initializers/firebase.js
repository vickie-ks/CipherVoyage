import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export function initialize() {
  const firebaseConfig = {
    apiKey: 'APIKEY',
    authDomain: 'ciphervoyage.firebaseapp.com',
    databaseURL: 'https://ciphervoyage-default-rtdb.firebaseio.com',
    projectId: 'ciphervoyage',
    storageBucket: 'ciphervoyage.appspot.com',
    messagingSenderId: '843279054676',
    appId: '1:843279054676:web:61b3784af2c8481353fac1',
    measurementId: 'G-V3JAXX0B29',
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

const database = initialize();
export default {
  initialize,
  database,
};
