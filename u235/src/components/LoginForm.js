import React, {useState, useEffect} from 'react'

function LoginForm({ Login, error}) {
    //local details for the form
    const [details, setDetails] = useState({name:"", email: "", password: ""})
    const [loginCount, setLoginCount] = useState(0);
    const [canLogin, setCanLogin] = useState(true);
    const [seconds, setSeconds] = useState(0);
    //Timer
    useEffect(() => {
        const timeout = setTimeout(()=> {
            setSeconds( seconds + 1);
        }, 1000);

        if (canLogin){              
            if(loginCount > 2 && seconds < 60){
                setCanLogin(false)
            }
        } else if(!canLogin){
            if(seconds > 60){
                setCanLogin(true);                               
            }
        } else {
            setSeconds(0);
            clearTimeout(timeout);
        } 
        
    }, [canLogin, seconds]);

    
    //Handles all submissions in the form
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
        setLoginCount(loginCount+1);
        
        
    }
    

    return (
        //Login form
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {!canLogin ? (<h3>Please wait 60 seconds</h3>) : ""}
                {!canLogin ? (<h3>Seconds: {seconds}</h3>) : ""}
                {(error) != "" ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e  => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={e  => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password" onChange={e  => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                { canLogin ? (<input type="submit" value="LOGIN"/>) : ("")}
            </div>
        </form>
    )
}

export default LoginForm
