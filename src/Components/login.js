import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
// import GoogleLogin from 'react-google-login'
const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const [sign, setSign] = useState({Uid:"",username:"" ,email: "", password: ""}) 
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const {Uid,username,email,password} = sign;
        const response = await fetch("http://localhost:5000/api/auth/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Uid,username,email,password})
        });
        const json = await response.json()
        console.log(json);
            // Save the auth token and redirect
            localStorage.setItem('jwtData', json.jwtData); 
            console.log(json.jwtData);
            navigate("/");
    }

    // const responseGoogle = (response) => {
    //   console.log('it is response');
    //   console.log(response);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        console.log(json.sucess);
        if (json.sucess){
            // Save the auth token and redirect
            localStorage.setItem('jwtData', json.jwtData); 
            console.log(json.jwtData);
            navigate("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

    // const handleSign= async ()=>{
    //   const response = await fetch("http://localhost:5000/auth/google", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // }

     const onChange1=(e)=>{
             setSign({...sign,[e.target.name]: e.target.value})
     }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='login-main'>
    <div className="container">
    <input type="checkbox" id="flip" />
    <div className="cover">
      <div className="front">
        <div className="text">
          <span className="text-1">Every new friend is a <br/> new adventure</span>
          <span className="text-2">Let's get connected</span>
        </div>
      </div>
      <div className="back">
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div className="forms" >
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" name="email" value={credentials.email} onChange={onChange} required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" name='password' value={credentials.password} onChange={onChange} required />
              </div>
              <div className="text"><Link to="#">Forgot password?</Link></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              {/* <div className='col-sm-4'>
               <i className="fab fa-google"></i>   
                     <Link className="btn btn-google btn-block text-uppercase btn-outline" to="/auth/google" onClick={handleSign}>Sign Up with Google</Link>
                 </div> */}
                   
              <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#" onSubmit={handleSubmit1}>
            <div className="input-boxes">
            <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your Uid" name="Uid" value={sign.Uid} onChange={onChange1} required />
              </div>
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" name="username" value={sign.name} onChange={onChange1} required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" name='email' value={sign.email} onChange={onChange1} required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" name='password' value={sign.password} onChange={onChange1} required />
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
               {/* <div className='col-sm-4'>
               <i className="fab fa-google"></i>   
                     <Link className="btn btn-google btn-block text-uppercase btn-outline" to="/auth/google">Sign Up with Google</Link>
                 </div>
                 <GoogleLogin
    clientId='634216453752-7mkaqm0kn1ehtdrhqmj6t7u67g2vv01h.apps.googleusercontent.com'
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> */}
                   
                    
                     

              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Login
