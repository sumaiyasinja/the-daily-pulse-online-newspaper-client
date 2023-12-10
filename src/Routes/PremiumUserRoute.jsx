import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import usePremiumUser from "../hooks/usePremiumUser";


const PremiumRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isPremiumTaken, isPremiumLoading] = usePremiumUser(); 
    const location = useLocation();

    if (loading || isPremiumLoading) {
        return <progress className="progress text-center w-56"></progress>
    }

    if (user && isPremiumTaken) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default PremiumRoute;