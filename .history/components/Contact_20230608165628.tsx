import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center font-bold text-4xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div id="loginForm" className="container">

        <form className="form " id ="login">

            <h1 className="form__title">Login</h1>

            <a href="./index.html" className="a__back"><i className="fa-solid fa-arrow-left button__back--arrow"></i></a>

            <div className="form__message  form__message--error"></div>

            <div className="form__input-group">

                <input type="email" id="email" placeholder="Email">

                <div className="form__input-error-message"></div>

            </div>



            <button className="form__button" id="submitForms">Submit</button>

            <p>

                <a className="form__link" id="linkForgotPassword" href="#">Forgot your password</a>

            </p>

        </form>
    </div>
    </div>
  )
}

export default Contact