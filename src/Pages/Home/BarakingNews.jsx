import Marquee from "react-fast-marquee";

const BarakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee speed={100} pauseOnClick={true} >
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BarakingNews;