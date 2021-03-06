import { useContext } from "react";
import { Navigate, useLocation } from "react-router"
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({children}:{children:JSX.Element}) => {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    let location = useLocation();

    if(!currentUser){
        // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}

export default RequiredAuth
