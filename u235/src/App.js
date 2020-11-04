import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App(){
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    if(details.password.length < 8){
      setError("Password must be 8 characters or more in length");
    }
    if(!/\S+@\S+\.\S+/.test(details.email)){
      setError("Invalid Email Address");
    }
    else{
      console.log("Details do not match")
      setError("Details do not match")
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onclick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
