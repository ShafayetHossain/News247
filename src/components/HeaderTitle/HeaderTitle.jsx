import logo from "../../assets/logo.png";
import moment from "moment";

const HeaderTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p className="font-medium">{moment().format("dddd, LL")}</p>
    </div>
  );
};

export default HeaderTitle;
