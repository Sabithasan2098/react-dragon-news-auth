import BreakingNews from "../shered/Header/BreakingNews";
import Header from "../shered/Header/Header";
import Navbar from "../shered/Navbar/Navbar";
import LeftSideNav from "../shered/SidesNavbar/LeftSideNav";
import RightSideNav from "../shered/SidesNavbar/RightSideNav";

 

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>  
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-2 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border-2">
                    <h1 className="text-4xl">Text comming soon</h1>
                </div>
                <div className="border-2">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;