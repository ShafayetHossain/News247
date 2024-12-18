import Advertise from "../Advertise/Advertise";
import FindUs from "../FindUs/FindUs";
import Qzone from "../Qzone/Qzone";
import SocialLogin from "../SocialLogin/SocialLogin";
const RightNavbar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <Advertise></Advertise>
        </div>
    );
};

export default RightNavbar;