import { useParams } from "react-router-dom";
import Header from "../shered/Header/Header";
import RightSideNav from "../shered/SidesNavbar/RightSideNav";
import Navbar from "../shered/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid lg:grid-cols-4">
        <div className="lg:col-span-3">
          <h1 className="text-3xl">News Details</h1>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
