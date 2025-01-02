import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pizza from "../Pizza/Pizza";
import "./Pizzas.css"

const Pizzas = () => {
        const [pizzas, setPizzas] = useState(null)
        useEffect(() => {
            fetch("menu.json")
                .then(res => res.json())
                .then(data => {
                    const pizzas = data.filter(item => item.category === "pizza")
                    setPizzas(pizzas)
    
    
                })
        }, [])
    return (
        <div>
            <div className="pizza  py-32 lg:p-32 ">
                <div className=" bg-black opacity-70 mt-10 py-24">
                    <h1 className="text-6xl text-white text-center font-extrabold ">PIZZA</h1>
                    <p className="mt-6 text-xl text-center font-bold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur nostrum incidunt nobis libero autem delectus? Tempore exercitationem architecto nihil. </p>
                </div>
            </div>
            <div className="mt-20">
           

                <div className="mt-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {
                            pizzas?.map(pizza => <Pizza key={pizza._id} pizza={pizza}></Pizza>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link className="btn btn-outline border-0 border-b-4 text-xl  mb-10 mt-10" to={""}>Order Your Favorite Food </Link>

                    </div>                </div>
            </div>
        </div>
    );
};

export default Pizzas;