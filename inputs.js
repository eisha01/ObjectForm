import React, { useState, useEffect } from 'react'
import './input.css';

const Inputs = () =>{
   const [userRegistration, setuserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    const [records, setRecords]= useState([]);

    const[gender,setgender] = useState();

 
    const handleInput = (e) =>
{
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);

    setuserRegistration({ ...userRegistration, [name]: value})

}

useEffect(() => {
 console.log('useEffect');
}, [])


const handleSubmit = (e) =>
{
     e.preventDefault();

     const newRecord = {...userRegistration,  id :new Date().getTime().toString()}

     console.log(records);
     setRecords([...records, newRecord]);

     console.log(records);

     setuserRegistration({username:"",email:"",phone:"",password:""})
}

console.log(gender)


  return (
    <>
    <div className='container'>
    <form action='' className='form'  onSubmit={handleSubmit}>
  <div  >
    <label htmlFor='username'><b>username</b></label>
    <input type='text' autoComplete='off' 
    value={userRegistration.username}
    onChange={handleInput}
    name='username' id="username"></input>
  </div>

  <div>
    <label htmlFor='email'><b>email</b></label>
    <input type='text' autoComplete='off'
    value={userRegistration.email}
    onChange={handleInput}
     name='email' id="email"></input>
  </div>

  <div>
    <label htmlFor='phone'><b>phone</b></label>
    <input type='text' autoComplete='off'
    value={userRegistration.phone}
    onChange={handleInput}
     name='phone' id="phone"></input>
  </div>

  <div>
    <label htmlFor='Password'><b>password</b></label>

    <input type='text' autoComplete='off'
    value={userRegistration.password}
    onChange={handleInput}
     name='password' id="password"></input>
<input type='radio' name='gender' onChange={(e)=>setgender('male' + e.target.value)} />
<input type='radio' name='gender' onChange={(e)=>setgender('female' + e.target.value)} />

  </div>  

  {/* <div>
     {/* <input type='radio' name='gender' value='male' onChange={(e)=>setgender(e.target.value)}>Male</input>
     <input type='radio' name='gender' value='female' onChange={(e)=>setgender(e.target.value)}>Female</input> */}
     {/* <input type='text' >Male</input>
     <input type='text' >Female</input>
    
     <h5>{gender}</h5>
  </div>  */}

  <button type='submit'>Submit</button>

    </form>

    </div>

    <div>
        {
            records.map((curElem) => {

                return (
                    <div className='showstyle'>
                        <p>{curElem.username}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p>
                        <p>{curElem.password}</p>

                        </div>
                )
            }

            )
        }
    </div>

    </>
  )
}

export default Inputs