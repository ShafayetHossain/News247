import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ContextProvider } from "../../Provider/Provider";
const SocialLogin = () => {

 const {signWithGoogle} = useContext(ContextProvider);

 const handleGoogleLogin = () => signWithGoogle();

  return (
    <div className="*:w-full space-y-2">
      <h1 className="font-semibold text-lg">Login With</h1>
      <button onClick={handleGoogleLogin} className="btn text-blue-500">
        <FaGoogle /> Login With Google
      </button>
      <button className="btn">
        <FaGithub /> Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
