import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const FormData = () => {


    const[userRegistration,setUserRegistration]=useState({
        username:'',
        email:'',
        phone:'',
        password:'',
    })
    const [isValidMatch, setIsValidMatch] = useState(false);

    const [records,setRecords]=useState([]);

   const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    
    setUserRegistration({...userRegistration,[name]:value});
   }

   const hasFormSubmit=(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidemail = emailRegex.test(userRegistration.email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
    const isValidpassword = passwordRegex.test(userRegistration.password);
   
    console.log("email: "+isValidemail);
    console.log("password: "+isValidpassword);

    setIsValidMatch(isValidemail,isValidpassword);
    console.log("hello: "+isValidMatch)

    if(isValidemail && isValidpassword){
        console.log("Valid form submitted!");
        console.log(records)
        const newRecord={...userRegistration,id:new Date().getTime().toString()};
        setRecords([...records,newRecord])
        console.log(records);
    }
   else if(!isValidemail){
    console.error("enter Vaild Email");
   
    alert("enter Vaild Email")
   }
   else if(!isValidpassword){
    console.error("enter Vaild Password")
    alert("enter Vaild Password")
   }
   else{
    console.log("enter both email and password");

   }

    setUserRegistration({username:'',email:"",phone:'',password:''});
   }

  return (
    <>
    <div>
        <form action='' onSubmit={hasFormSubmit}>
            <div>
                <label htmlFor='username'>FullName</label>
                <input type='text'autoComplete='off'
                 value={userRegistration.username}
                 onChange={handleInput}
                name='username'/>
            </div>
            <div>
                <label htmlFor='email'>email</label>
                <input type='text'autoComplete='off' 
                 value={userRegistration.email}
                onChange={handleInput} name='email'/>
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='text'autoComplete='off' value={userRegistration.phone} onChange={handleInput} name='phone'/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='text'autoComplete='off' value={userRegistration.password} onChange={handleInput} name='password'/>
                {!isValidMatch && (
        <p>
          Your password should be at least 8 characters long and include at least
          one uppercase letter, one lowercase letter, one number, and one special
          character (!@#$%^&*)
        </p>
      )}
            </div>

            <button type='submit'>submit</button>
        </form>
    </div>

    <div>
        {records.map((curElem)=>{
            return(
                <div >
                <p>{curElem.username}</p>
                <p>{curElem.email}</p>
                <p>{curElem.phone}</p>
                <p>{curElem.password}</p>
                </div>
            )
        })}
    </div>
    
    </>
  )
}

export default FormData