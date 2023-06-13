import React from 'react'

function Contact() {
  return (
    <div>
        <h1 Name='text-center font-bold text-4xl'>Get in <span Name='text-purple-500'>Touch!</span></h1>
        <div id="loginForm" ="container">

        <form ="form " id ="login">

            <h1 ="form__title">Login</h1>

            <a href="./index.html" ="a__back"><i ="fa-solid fa-arrow-left button__back--arrow"></i></a>

            <div ="form__message  form__message--error"></div>

            <div ="form__input-group">

                <input type="text" id="email" ="form__input" autofocus placeholder="Username or Email">

                <div ="form__input-error-message"></div>

            </div>

            <div ="form__input-group">

                <input type="password" id="pwd" ="form__input " autofocus placeholder="Password">

                <div ="form__input-error-message"></div>

            </div>

            <button onclick="checkData()" ="form__button" id="submitForms">Submit</button>

            <p class="form__text">

                <a class="form__link" id="linkForgotPassword" href="#">Forgot your password</a>

            </p>

          

            <p class="form__text">

                <a ="form__link" id="linkCreateAccount" href="#">Don't have an account? Create account</a>

            </p>

        </form>
    </div>
  )
}

export default Contact