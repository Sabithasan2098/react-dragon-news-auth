import {
  FaGoogle,
  FaSquareGithub,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg1 from "../../../assets/bg1.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-xl font-bold ">Login With</h3>
        <button className="btn btn-outline w-full btn-info ">
          <FaGoogle></FaGoogle>Google
        </button>
        <button className="btn btn-outline w-full ">
          <FaSquareGithub></FaSquareGithub>Github
        </button>
      </div>
      {/* find-us */}
      <div className="p-4 mb-6">
        <h3 className="text-xl font-bold mb-3">Find us </h3>
        <div className="flex items-center gap-3 border rounded-t-lg p-4">
          <FaFacebook></FaFacebook>
          <a href="">Facebook</a>
        </div>
        <div className="flex items-center gap-3 border-x p-4">
          <FaSquareTwitter></FaSquareTwitter>
          <a href="">Twiter</a>
        </div>
        <div className="flex items-center gap-3 border rounded-b-lg p-4">
          <FaInstagram></FaInstagram>
          <a href="">Instagram</a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3] rounded-lg">
        <h3 className="text-xl font-bold ">Q-Zone</h3>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="  relative">
        <img className="mx-auto relative" src={bg1} alt="" />
        <div className="text-center mx-10 absolute space-y-7 bottom-20">
          <h2 className="font-bold	text-4xl text-white">Create an Amazing Newspaper</h2>
          <p className="text-base font-normal text-white">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn  bg-red-500 border-none text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
