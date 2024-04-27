import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Login = () => {
    const {signInUser, googleSignIn, githubSignIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
            toast.success('Login successful')
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
        .catch(error=>{
            console.error(error)
            toast.error('There is no such user. Check email and password')
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then(result => {
            console.log(result.user)
            toast.success('Login successful');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
        .catch(error => {
            console.log('error', error.message)
            toast.error('Error signing in with Google');
        })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
        .then(result => {
            console.log(result.user)
            toast.success('Login successful');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
        .catch(error => {
            console.log('error', error.message)
            toast.error('Error signing in with Google');
        })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div>
            <h2 className="text-5xl my-10 text-center font-extrabold text-orange-500">Login <span className="text-black">!</span></h2>
            <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row shadow-2xl'>
                <div className="w-full lg:w-3/5 text-center justify-center">
                <form onSubmit={handleLogin} className="card-body justify-center mt-10">
                        <div className="form-control">
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="relative form-control">
                        <input className="input input-bordered" placeholder="Password" type={showPassword ? "text" : "password"} name="password" id="" required/>
                        <span className="absolute top-3 right-3" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOff /> : <IoEye />
                            }
                            </span><br />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn border-orange-300 bg-white text-orange-600">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <button onClick={handleGoogleSignIn} className="border w-1/2 inline-flex gap-5 rounded-lg p-4 bg-blue-100 font-bold"><FcGoogle className="text-2xl ml-10"/>Login with Google</button>
                        <button onClick={handleGithubSignIn} className="border w-1/2 inline-flex gap-5 rounded-lg p-4 bg-gray-200 font-bold"><ImGithub className="text-2xl ml-10"/>Login with Github</button>
                    </div>
                </div>
                    <div className='w-full lg:w-2/5'>
                        <img className='w-full h-full md:h-[600px] lg:h-full' src="https://i.ibb.co/J2VWZkt/20944201.jpg" alt="" />
                    </div>
                </div>
                <p className="text-center mt-5">Do not have an account?<Link className="ml-2 text-orange-600 font-bold" to="/register">Register</Link></p>
        </div>
        </div>
    );
};

export default Login;