import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const LeftSideNav = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setcategory(data));
  }, []);
  return (
    <div className="p-4 space-y-4 font-semibold	text-xl	">   
        <div className="mb-2">
            <h1 className="text-2xl">All Category</h1>
        </div>
        {category.map((category) => (
          <Link className="block ml-4 text-[#9F9F9F]" 
        //   link create o id dia tar configaretion
        to={`/category/${category.id}`}
          key={category.id}>{category.name}</Link>
        ))} 
    </div>
  );
};

export default LeftSideNav;
