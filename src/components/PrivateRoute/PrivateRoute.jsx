import { useContext } from "react";
import { ContextProvider } from "../../Provider/Provider";
import Login from "../Login/Login";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRoute = ({children}) => {
  const { userAcount, loading } = useContext(ContextProvider);
  const location = useLocation();

  if(loading)
  {
    return <Loading></Loading>
  }
  if (userAcount) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/auth"}></Navigate>;
  }
};

export default PrivateRoute;
