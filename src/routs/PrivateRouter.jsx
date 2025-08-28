import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <Loading/>
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' replace state={{from: location}}></Navigate>;
};

export default PrivateRouter;
