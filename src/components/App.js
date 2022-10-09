import React, {useState} from 'react';

import '../styles/App.css'

 

function App() {

 const [name, setName] = useState('');

 const [email, setEmail] = useState('');

 const [gender, setGender] = useState('male');

 const [phoneNumber, setPhoneNumber] = useState('');

 const [password, setPassword] = useState('');

 const [userName, setUserName] = useState('');

 const [nameError, setNameError] = useState('');

 const [emailError, setEmailError] = useState('');

 const [phoneNumberError, setPhoneNumberError] = useState('');

 const [passwordError, setPasswordError] = useState('');

 const [emptyError, setEmptyError] = useState('');

 const [genderError, setGenderError] = useState('');

 

 const resetErrorDefault = () =>{

     setNameError('');

     setPhoneNumberError('');

     setPasswordError('');

     setEmailError('');

     setEmptyError('');

     setGenderError('');

 }

 const validate = () => {

   if(name === '' || email === '' || gender === '' || phoneNumber === '' || password === ''){

     setEmptyError('All fields are mandatory');

     setUserName('');

     return false;

   }

   if(!name.match(/^[A-Za-z0-9- ]+$/)) {

     setNameError('Name is not alphanumeric');

     setUserName('');

     return false;

 }

   if(!email.includes('@')){

     setEmailError('email must contain @');

     setUserName('');

     return false;

   }

   if (!gender.match(/male|female|others/i)) {

     setGenderError('Please identify as male, female or others');

     setUserName('');

     return false;

   }

   if(!phoneNumber.match(/^[0-9]+$/)){

     setPhoneNumberError('Phone Number must contain only numbers');

     setUserName('');

     return false;

   }

   if(password.length < 6){

     setPasswordError('Password must contain atleast 6 letters');

     setUserName('');

     return false;

   }

   return true;

 }

 const handleSubmit = (e) => {

   e.preventDefault();

   resetErrorDefault();

   const isValid = validate();

   if(isValid) {

     setName('');

     setEmail('');

     setGender('');

     setPhoneNumber('');

     setPassword('');

     resetErrorDefault();

     // console.log(name, email, gender, phoneNumber, password);

     setUserName(email.substr(0, email.indexOf('@')));

   }

 }

 

 return (

   <div className="App">

       <form onSubmit={handleSubmit}>

         <input data-testid='name' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>

         <span>{nameError}</span>

         <input data-testid='email' type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

         <span>{emailError}</span>

         <select data-testid='gender' name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>

           <option value="male">Male</option>

           <option value="female">Female</option>

           <option value="other">Other</option>

         </select>

         <span>{genderError}</span>

         <input data-testid='phoneNumber' type='text' placeholder='phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>

         <span>{phoneNumberError}</span>

         <input data-testid='password' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

         <span>{passwordError}</span>

         <span>{emptyError}</span>

         <input type="submit" data-testid='submit' value="Submit" />

       </form>

       <div className='username'>

         <h2> { (userName) ? "Hello " + (userName) : '' }</h2>

       </div>

   </div>

 );

}

 

export default App;
