import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-3 rounded border-2 bg-[#F3F3F3] border-dotted border-[#444444]  text-lg font-semibold ">
      <div>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
