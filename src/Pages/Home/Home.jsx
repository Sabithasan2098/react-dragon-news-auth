import { useLoaderData } from "react-router-dom";
import BreakingNews from "../shered/Header/BreakingNews";
import Header from "../shered/Header/Header";
import Navbar from "../shered/Navbar/Navbar";
import LeftSideNav from "../shered/SidesNavbar/LeftSideNav";
import RightSideNav from "../shered/SidesNavbar/RightSideNav";
import News from "./News";

 

const Home = () => {
    const  news = useLoaderData()
    console.log(news);
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>  
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2  ">
                     {
                        news.map(aNews => <News key={aNews._id} news={aNews}></News>)
                     }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;