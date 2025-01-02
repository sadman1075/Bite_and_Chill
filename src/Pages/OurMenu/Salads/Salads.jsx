import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Salad from "../Salad/Salad";
import "./Salads.css"

const Salads = () => {
    const [salads, setSalads] = useState(null)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const salads = data.filter(item => item.category === "salad")
                setSalads(salads)


            })
    }, [])
    return (
        <div>
            <div className="salad  py-32 lg:p-32 ">
                <div className=" bg-black opacity-70 mt-10 py-24">
                    <h1 className="text-6xl text-white text-center font-extrabold ">SALAD</h1>
                    <p className="mt-6 text-xl text-center font-bold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur nostrum incidunt nobis libero autem delectus? Tempore exercitationem architecto nihil. </p>
                </div>
            </div>
            <div className="mt-20">


                <div className="mt-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {
                            salads?.map(salad => <Salad key={salad._id} salad={salad}></Salad>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link className="btn btn-outline border-0 border-b-4 text-xl  mb-10 mt-10" to={""}>Order Your Favorite Food </Link>

                    </div>                </div>
            </div>
        </div>
    );
};

export default Salads;