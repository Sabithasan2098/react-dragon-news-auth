import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-7xl mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
