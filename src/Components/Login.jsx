import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {logInUser,setUser,googleSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email = form.email.value;
        const password = form.pass.value;
        // console.log(email,password);
        logInUser(email,password)
        .then(result=>{
            // console.log(result.user);
            setUser(result.user)
            // Redirect to the page user intended to visit before login or default to '/'
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        })
        .catch(error=>{
            // console.log(error)
        })
    }

    const handleGoogleLogin=()=>{
      googleSignIn()
      .then(result=>{
          // console.log(result.user)
          setUser(result.user)
      })
      .catch(error=>{
          // console.log(error)
      })
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:w-[400px] lg:w-[500px]">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h1 className="mx-auto">New here?  <Link
         to='/register' className="text-blue-800">Register</Link></h1>
      </form>
      <div className="mx-auto mb-7 lg:mb-12 ">
                <button onClick={handleGoogleLogin} className="btn btn-outline border-blue-700 border-2 ">Continue with Google</button>
            </div>
    </div>
  </div>
</div>
    );
};

export default Login;