// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../contexts/AuthContext";
// import { AUTH_TOKEN } from "../constants";

// const PrivateRoute = ({ component: RouteComponent }) => {
//   const { currentUser } = useAuthContext();

//   if (!currentUser && !localStorage.getItem(AUTH_TOKEN)) {
//     return <Navigate to="/login" />;
//   }

//   return <RouteComponent />;
// };

// export default PrivateRoute;
