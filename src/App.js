import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Joi from 'joi';
import { db } from './firebase';
import logo from './logo.png';
import loader from './loader.gif';
import './App.css';


const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

function App() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [inputError, inputSuccess])

  const sendData = async () => {
    try {
      await addDoc(collection(db, "contact"), {
        email: inputEmail
      });
      setInputEmail('');
      setInputSuccess('You are now subscribed!')
    } catch (error) {
      console.log('error', error);
    }
  }

  const onSubscribe = async () => {
    setIsLoading(true)
    const data = {
      email: inputEmail
    }
    try {
      const { error } = await schema.validate(data)
      if(error) {
        setInputError('Please enter a valid email')
      } else {
        sendData()
      }
    } catch(error) {
      setInputError('Please enter a valid email')
    }
  }

  const onInputEmailChange = e => {
    setInputEmail(e.target.value)
    setInputError('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!inputSuccess && (
          <>
            <p>Provide your email:</p>
            <input className="input" type="text" name="email" value={inputEmail} onChange={onInputEmailChange} />
            <div className="submitSection">
              <button className="button" onClick={onSubscribe} disabled={isLoading}>Subscribe</button>
              {isLoading && <img src={loader} className="loader" alt="loader" />}
            </div>
          </>          
        )}
        <p>{inputError}</p>
        <p>{inputSuccess}</p>
      </header>
    </div>
  );
}

export default App;
