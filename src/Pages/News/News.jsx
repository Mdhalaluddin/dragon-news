import Header from "../../Sheared/Header/Header";
import LeftSide from "../../Sheared/LeftSide/LeftSide";
import Navbar from "../../Sheared/Navber/Navbar";


const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mx-auto">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                </div>
                <div>
                    <LeftSide></LeftSide>
                </div>
            </div>
        </div>
    );
};

export default News;