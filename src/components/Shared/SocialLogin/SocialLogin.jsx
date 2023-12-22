import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  
    const { googleLogin } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const handleGoogleLogin = () => {
      
      googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success('Successfully google login');
        navigate(location?.state ? location?.state : '/dashboard/userProfile')
      })

      .catch(error => {
        toast.error(error.message);
      })

    }


    const handleGithubLogin = () => {
        console.log('Hello github login');
    }
    return (
        <div>
        <div className="flex items-center justify-center gap-6 mt-6">
  
          <button onClick={handleGoogleLogin}>
            {" "}
            <FcGoogle className="text-xl"></FcGoogle>{" "}
          </button>

          <button onClick={handleGithubLogin}>
            {" "}
            <FaGithub className="text-xl"></FaGithub>{" "}
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;