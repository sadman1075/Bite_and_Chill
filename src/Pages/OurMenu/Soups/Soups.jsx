import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Soup from "../Soup/Soup";
import "./Soups.css"

const Soups = () => {
        const [soups, setSoups] = useState(null)
        useEffect(() => {
            fetch("menu.json")
                .then(res => res.json())
                .then(data => {
                    const soups = data.filter(item => item.category === "soup")
                    setSoups(soups)
    
                })
        }, [])
    return (
        <div>
        <div className="soup  py-32 lg:p-32 ">
            <div className=" bg-black opacity-70 mt-10 py-24">
                <h1 className="text-6xl text-white text-center font-extrabold ">SOUP</h1>
                <p className="mt-6 text-xl text-center font-bold text-white">Would You Like TO Try A Dish? </p>
            </div>
        </div>
        <div className="mt-20">
    

            <div className="mt-6">
                <div className="grid lg:grid-cols-2 gap-10">
                    {
                        soups?.map(soup =><Soup key={soup} soup={soup}></Soup>)
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

export default Soups;