import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { Link, Navigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
const Signup = () => {
  const { authUser } = useAuthContext();
  const { loading, signup } = useSignUp();
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    confirmPassword: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  if (authUser) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/signin" className="label-text-alt link link-hover">
                  already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className={
                  loading
                    ? "btn bg-warning text-white hover:text-black uppercase cursor-not-allowed"
                    : "btn bg-warning text-white hover:text-black uppercase "
                }
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
