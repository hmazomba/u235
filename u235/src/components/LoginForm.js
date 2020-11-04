import React, {useState} from 'react'

function LoginForm({ Login, error}) {
    //local details for the form
    const [details, setDetails] = useState({name:"", email: "", password: ""})
    //Handles all submissions in the form
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    return (
        //Login form
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/*ERROR*/}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password"/>
                </div>

                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
