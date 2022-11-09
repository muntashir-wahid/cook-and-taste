import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoding } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoding) {
    return <Loader className="min-h-screen w-full" />;
  }

  if (!user) {
    navigate("/login");
    return;
  }

  return children;
};

export default PrivateRoute;
