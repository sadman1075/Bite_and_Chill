import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dessert from "../Dessert/Dessert";
import "./Desserts.css"

const Desserts = () => {
    const [desserts, setdesserts] = useState(null)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const desserts = data.filter(item => item.category === "dessert")
                setdesserts(desserts)


            })
    }, [])

    return (
        <div>
            <div className="dessert  py-32 lg:p-32 ">
                <div className=" bg-black opacity-70 mt-10 py-24">
                    <h1 className="text-6xl text-white text-center font-extrabold ">DESSERTS</h1>
                    <p className="mt-6 text-xl text-center font-bold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur nostrum incidunt nobis libero autem delectus? Tempore exercitationem architecto nihil. </p>
                </div>
            </div>
            <div className="mt-20">
    

                <div className="mt-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {
                            desserts?.map(dessert => <Dessert key={dessert._id} dessert={dessert}></Dessert>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link className="btn btn-outline border-0 border-b-4 text-xl  mb-10 mt-10" to={""}>Order Your Favorite Food </Link>

                    </div>                </div>
            </div>
        </div>
    );
};

export default Desserts;