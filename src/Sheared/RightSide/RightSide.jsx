import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const RightSide = () => {
    const [categories, setCategories] = useState([]);
    // const [sport, setSport] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    // useEffect(({

    // }), [])
    return (
        <div>
            <h2 className="text-2xl m-2 font-semibold">All Categories</h2>
            <h2 className="text-2xl font-semibold text-center p-2 border m-2 bg-slate-300 rounded-lg mt-3">National News</h2>
            <div className="space-y-5 p-4">
                {
                    categories.map(category => <NavLink
                        className="block ml-4 text-xl font-semibold text-slate-500"
                        key={category.id} to={`/category/${category.id}`}>
                        {category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default RightSide;