import { useLoaderData } from "react-router-dom";
import Header from "../../Sheared/Header/Header";
import LeftSide from "../../Sheared/LeftSide/LeftSide";
import Navbar from "../../Sheared/Navber/Navbar";
import RightSide from "../../Sheared/RightSide/RightSide";
import BarakingNews from "./BarakingNews";
import MainNews from "./MainNews";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BarakingNews></BarakingNews>
            <Navbar></Navbar>

            <nav className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <RightSide></RightSide>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <MainNews
                        key={aNews._id} news={aNews}
                        ></MainNews>)
                    }

                </div>
                <div className="">
                    <LeftSide></LeftSide>
                </div>
            </nav>
        </div>
    );
};

export default Home;