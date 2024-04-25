import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="min-h-screen bg-orange-100 rounded-2xl items-center mt-10">
            <div className="hero-content flex flex-col mx-auto pt-20 space-y-5">
                <div className="text-center">
                <h1 className="text-5xl font-bold"><span className="text-orange-500">Register</span> now!</h1>
                </div>
                <div className="card w-3/4 shadow-2xl bg-base-100">
                <form className="card-body">
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
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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