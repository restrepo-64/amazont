import React, {useState} from "react";
import './styles/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();; //this stops the refresh!!
    //do the login logic
    auth.signInWithEmailAndPassword(email, password)
      .then ((auth) => {
        //logged in successfully
        history('/')
      })
      .catch((e) => alert(e.message))

  }

  const register = event => {
    event.preventDefault();; //this stops the refresh!!
    //do the register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //created a user and logged in
      history('/')
    })
    .catch((e) => alert(e.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          />
      </Link>

      <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" onChange={event => setEmail(event.target.value)} value={email} />
            <h5>Password</h5>
            <input type="password" onChange={event => setPassword(event.target.value)} value={password}/>
            <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
          </form>
          <p>By signing in you agree to Amazon's Conditions and 
            Terms on Cookies, Privacy, and your first born child.
            If you'd like to read these terms before clicking, please use your favorite
            search engine to look up these Terms and Conditions.</p>
          <button onClick={register} className="login__registerButton">Create a new Amazon Account</button>

      </div>
    </div>
  );
}

export default Login;
