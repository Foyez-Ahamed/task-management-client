import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {

    const handleGoogleLogin = () => {
        console.log('Hello Social Login');
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