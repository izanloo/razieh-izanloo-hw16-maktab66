import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Eye = <FontAwesomeIcon className="icon" icon={faEye} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={faEyeSlash} />;

export default function Login() {
  const [show, setshow] = useState(false)
  const pass = useRef();
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      email: "razieh@gmail.com",
      password: "1234"
    },
    {
      email: "izanloo@gmail.com",
      password: "1234"
    }
  ];
  const showpassword = () => {
    setshow(!show)
    pass.current.type = show ? 'password' : 'text';
  }
  const errors = {
    enterdEmail: "ایمیل وارد شده وجود ندارد",
    password: "پسورد وارد شده اشتباه است"
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    let { enterdEmail, password } = document.forms[0];
    const userData = database.find((user) => user.email === enterdEmail.value);

    if (userData) {
      if (userData.password !== password.value) {
        // invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
        setErrorMessages({name:""})
      }
    } else {
      // email not found
      setErrorMessages({ name: "enterdEmail", message: errors.enterdEmail });
    }
  };

  // Generate  error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    {isSubmitted ? alert("ورود شما با موفقیت انجام شد") : <span></span>}

  
  return (
    <>
      <h3 className='text-center text-white py-3'>خوش آمدید</h3>
      <form >
        <input type="email" className='w-100 p-1' name="enterdEmail" placeholder="پست الکترونیک" required="required" />
        {renderErrorMessage("enterdEmail")}
        <div>
        <input placeholder="کلمه عبور" className='w-100 position-relative mt-4 p-1 mb-1' ref={pass} type="password" name="password"  required="required" />
        {show ? <i className='show-pass' onClick={showpassword}>{Eye}</i> : <i className='show-pass' onClick={showpassword}>{EyeSlash}</i>}
        </div>{renderErrorMessage("password")}
        <a href="#" >فراموش کردید؟</a>
        <button onClick={handleSubmit} className='w-100 log text-white border-0 py-1 mt-1' required="required">ورود</button>
     
      </form>
    </>
  )
}




