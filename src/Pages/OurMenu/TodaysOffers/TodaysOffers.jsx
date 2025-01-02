import { useEffect, useState } from "react";
import "./TodaysOfeers.css"
import TodayOffer from "../TodaysOffer/TodayOffer";
import { Link } from "react-router-dom";
const TodaysOffers = () => {
    const [todayoffers, settodayoffers] = useState(null)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category === "popular")
                settodayoffers(items)

            })
    }, [])
    return (
        <div>
            <div className="todays-offers  py-32 lg:p-32 ">
                <div className=" bg-black opacity-70 mt-10 py-24">
                    <h1 className="text-6xl text-white text-center font-extrabold ">OUR MENU</h1>
                    <p className="mt-6 text-xl text-center font-bold text-white">Would You Like TO Try A Dish? </p>
                </div>
            </div>
            <div className="mt-20">
                <div className="">
                    <p className="text-2xl lg:text-3xl text-center text-yellow-500">---SHOULD TRY---</p>
                    <div className="divider h-10 w-1/2 mx-auto "></div>
                    <p className="text-3xl lg:text-5xl text-center ">CHEF RECOMMENDS</p>
                    <div className="divider h-10  w-1/2 mx-auto"></div>

                </div>

                <div className="mt-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {
                            todayoffers?.map(todayoffer =><TodayOffer key={todayoffer} todayoffer={todayoffer}></TodayOffer>)
                        }
                    </div>
                    <div className="flex justify-center">
                    <Link className="btn btn-outline border-0 border-b-4 text-xl  mb-10 mt-10" to={""}>Order Your Favorite Food </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysOffers;