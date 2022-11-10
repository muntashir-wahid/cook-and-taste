import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { AuthContext } from "../../context/AuthProvider";
import useChangeTitle from "../../hooks/useChangeTitle";

const Register = () => {
  useChangeTitle("Register");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // // Context
  const { createUserHandler, updateUserProfileHandler, isLoding, setIsLoding } =
    useContext(AuthContext);

  // ------------------------- //
  // Registration from Handler
  // ------------------------- //

  const registerFormSubmitHandler = (event) => {
    event.preventDefault();

    // Collect from value upon form submission

    const registerForm = event.target;
    const displayName = registerForm.fullName.value;
    const photoURL = registerForm.photoURL.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    setError("");

    createUserHandler(email, password)
      .then(({ user }) => {
        updateUserProfileHandler(displayName, photoURL)
          .then(() => {
            // console.log("Profile updated");
          })
          .catch((error) => console.error(error));
        navigate("/recipes");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  return (
    <div className="min-h-screen px-6 w-full">
      {isLoding ? (
        <Loader className="min-h-screen" />
      ) : (
        <Fragment>
          {" "}
          <h2 className="text-center text-4xl mt-10 font-semibold">
            Please Register
          </h2>
          <div className="max-w-lg  mx-auto p-6 my-6 shadow-2xl rounded-xl">
            <form onSubmit={registerFormSubmitHandler} className="p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fullname</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="fullname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              Already have an Account?
              <Link className="btn btn-link px-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Register;
