import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import ComponentC from './component/ComponentC';
import ComponentF from './component/ComponentF';
import CounterOne from './component/CounterOne';

export const UserContext=React.createContext()

export const ChannelContext=React.createContext()

function App() {

  function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  console.log(name,surname);

  // ...
}

  return (
    <>
    <div className='App'>
      <UserContext.Provider value={'Nikhil'}>

        <ChannelContext.Provider value={'kumar'}>
              <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      
      <CounterOne>
        
      </CounterOne>
    </div>
    </>
  );
}

export default App;
