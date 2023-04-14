import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{

    
    try {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          setData(resp)
        })
      })
    } catch (error) {

    setData(error)
    }
  },[])
  return (
   <>

   <h1>Get Api Call</h1>

   <table>
      <tr>
        <td>userId</td>
        <td>id</td>
        <td>title</td>
        <td>status</td>
      </tr>

      {
        data.map((item)=>
        <tr key={item.id}>

          <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.completed}</td>



        </tr>
        )
      }
   </table>
   
   </>
  );
}

export default App;
