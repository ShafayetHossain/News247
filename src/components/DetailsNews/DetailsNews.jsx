import {useLoaderData } from "react-router-dom";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import RightNavbar from "../RightNavbar/RightNavbar";
import DetailsCard from "../DetailsCard/DetailsCard";

const DetailsNews = () => {
  const { data } = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <HeaderTitle></HeaderTitle>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-9">
            <DetailsCard key={data[0]._id} news={data[0]}></DetailsCard>
        </div>

        <div className="col-span-3">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
