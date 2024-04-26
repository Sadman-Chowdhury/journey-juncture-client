import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        //password error
        if(password.length<6){
            toast.error('Password should be atleast 6 characters')
            return
        }else if(!/[A-Z]/.test(password)){
            toast.error('Password should have atleast one Uppercase')
            return
        }else if(!/[a-z]/.test(password)){
            toast.error('Password should have atleast one Lowercase')
            return
        }

        try {
            const result = await createUser(email, password);
            const user = result.user;
            console.log(user);
            toast.success('User created successfully');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error(error);
            toast.error('Error creating user');
        }
    }

    return (
        <div>
            <ToastContainer/>
            <div className="min-h-screen bg-orange-100 rounded-2xl items-center mt-10">
            <div className="hero-content flex flex-col mx-auto pt-20 space-y-5">
                <div className="text-center">
                <h1 className="text-5xl font-bold"><span className="text-orange-500">Register</span> now!</h1>
                </div>
                <div className="card w-3/4 shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="relative form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input name="password" placeholder="password" type={showPassword ? "text" : "password"}  className="input input-bordered" required />
                    <span className="absolute top-12 right-5" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOff /> : <IoEye />
                            }
                            </span>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-orange-400 font-bold text-[18px]">Register</button>
                    </div>
                    <p className="text-center mt-3">Already have an account? <Link className="font-bold text-orange-600" to="/login">Login</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;