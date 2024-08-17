import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Link } from "react-router-dom";


const Register = () => {
    const {createuser,googleSignIn,setUser}=useContext(AuthContext)

    const handlesubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.pass.value;
        // console.log(name,email,password)
        createuser(email,password)
        .then(result=>{
            // console.log(result.user)
            setUser(result.user)
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
        <div className="hero bg-base-200 min-h-screen mt-7 lg:mt-3 lg:pt-7">
        <div className="hero-content flex-col md:w-[400px] lg:w-[500px] ">
          <div className="text-center lg:text-left ">
            <h1 className="text-3xl md:text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-screen-lg shrink-0 shadow-2xl">
            <form onSubmit={handlesubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <h1 className="mx-auto">Already have an account? <Link to='/login' className="text-blue-800">Login</Link></h1>

            </form>
            <div className="mx-auto mb-7 lg:mb-12 ">
                <button onClick={handleGoogleLogin} className="btn btn-outline border-blue-700 border-2 ">Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;