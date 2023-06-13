import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center font-bold text-4xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div id="loginForm" class="container">

        <form class="form " id ="login">

            <h1 class="form__title">Login</h1>

            <a href="./index.html" class="a__back"><i class="fa-solid fa-arrow-left button__back--arrow"></i></a>

            <div class="form__message  form__message--error"></div>

            <div class="form__input-group">

                <input type="text" id="email" class="form__input" autofocus placeholder="Username or Email">

                <div class="form__input-error-message"></div>

            </div>

            <div class="form__input-group">

                <input type="password" id="pwd" class="form__input " autofocus placeholder="Password">

                <div class="form__input-error-message"></div>

            </div>

            <button onclick="checkData()" class="form__button" id="submitForms">Submit</button>

            <p class="form__text">

                <a class="form__link" id="linkForgotPassword" href="#">Forgot your password</a>

            </p>

          

            <p class="form__text">

                <a class="form__link" id="linkCreateAccount" href="#">Don't have an account? Create account</a>

            </p>

        </form>
    </div>
  )
}

export default Contact