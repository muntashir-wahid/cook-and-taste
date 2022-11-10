import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import useChangeTitle from "../../hooks/useChangeTitle";
import Loader from "../../components/UI/Loader/Loader";

const Login = () => {
  useChangeTitle("Login");
  const [error, setError] = useState("");
  const { logInHandler, logInWithGoogleHandler, isLoding, setIsLoding } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Login handler
  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    const loginForm = event.target;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    setError("");

    logInHandler(email, password)
      .then(({ user: currUser }) => {
        navigate("/recipes");
        const user = { email: currUser.email };

        fetch("https://cook-and-taste-server.vercel.app/api/v1/auth", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(({ data }) => {
            localStorage.setItem("cook-and-taste-token", data.token);
          });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };

  const socialLoginHandler = () => {
    logInWithGoogleHandler()
      .then(({ user: currUser }) => {
        const user = { email: currUser.email };
        navigate("/recipes");
        fetch("https://cook-and-taste-server.vercel.app/api/v1/auth", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(({ data }) => {
            localStorage.setItem("cook-and-taste-token", data.token);
          });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };

  return (
    <div className="min-h-screen px-4 w-full">
      {isLoding ? (
        <Loader className="min-h-screen" />
      ) : (
        <Fragment>
          <h2 className="text-center text-4xl mt-10 font-semibold">
            Please Login
          </h2>
          <div className="max-w-md my-6 mx-auto p-6 shadow-2xl rounded-xl">
            <form onSubmit={loginFormSubmitHandler} className="p-2">
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
              <div className="form-control">
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
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">Or Login with</div>
              <div className="grid h-20  rounded-box place-items-center">
                <button
                  onClick={socialLoginHandler}
                  className="btn btn-outline btn-primary"
                >
                  <FcGoogle className="mr-2 text-lg" />
                  Google
                </button>
              </div>
            </div>
            <p className="text-center">
              New to Express Blog?
              <Link className="btn btn-link px-1" to="/register">
                Register
              </Link>
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Login;
