import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightSideNav/RightsideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div className="border">
                    <RightsideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;