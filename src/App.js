import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import logo from './logo.png';
import './App.css';

function App() {
  const sendData = async () => {
    // Add a new document in collection "cities" with ID 'LA'
    try {
      await addDoc(collection(db, "contact"), {
        email: 'yks.nit2@gmail.com',    
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    sendData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div data-id="internal-testing" />
    </div>
  );
}

export default App;
