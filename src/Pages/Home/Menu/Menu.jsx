import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularItems = data.filter(item => item.category === "popular")
                setItems(popularItems)
            })

    }, [])
    console.log(items)

    return (
        <div className="mt-10 mb-10 lg:mt-32 lg:mb-32">
            <div className="mt-10 mb-10 lg:mt-32 lg:mb-32">
                <p className="text-2xl lg:text-3xl text-center text-yellow-500">---CHECK IT OUT---</p>
                <div className="divider h-10 w-1/2 mx-auto "></div>
                <p className="text-3xl lg:text-5xl text-center">FROM OUR MENU</p>
                <div className="divider h-10  w-1/2 mx-auto"></div>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;