import Header from "../../Sheared/Header/Header";
import LeftSide from "../../Sheared/LeftSide/LeftSide";
import Navbar from "../../Sheared/Navber/Navbar";
import RightSide from "../../Sheared/RightSide/RightSide";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <nav className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <RightSide></RightSide>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl font-semibold"> News coming soooon</h2>
                </div>
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
            </nav>
        </div>
    );
};

export default Home;