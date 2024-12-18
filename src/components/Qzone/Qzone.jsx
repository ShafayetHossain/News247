import swimming from "../../assets/swimming.png";
import classroom from "../../assets/class.png";
import playground from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="">
      <h1 className="font-semibold text-lg mt-6 mb-1">Q-Zone</h1>
      <div>
        <img src={swimming} alt="" />
      </div>
      <div>
        <img src={classroom} alt="" />
      </div>
      <div>
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
