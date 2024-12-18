import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg mt-6 mb-2">Find Us On</h1>
      <div className="join join-vertical flex">
        <button className="btn join-item justify-start"><FaFacebook />Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
