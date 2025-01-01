import { Link } from "react-router-dom";
import momo from "../../../assets/home/featured.jpg"
import "./OneItem.css";
const OneItem = () => {
    return (
        <div className="oneItem bg-fixed  mt-10 mb-10 lg:mt-32 lg:mb-32" >
            <div className="p-4 lg:p-32">
                <div className="">
                    <p className="text-2xl lg:text-3xl text-center text-yellow-500">---SHOULD TRY---</p>
                    <div className="divider h-10 w-1/2 mx-auto "></div>
                    <p className="text-3xl lg:text-5xl text-center text-white">CHEF RECOMMENDS</p>
                    <div className="divider h-10  w-1/2 mx-auto"></div>

                </div>
                <div className="lg:flex items-center gap-10 ">
                    <div className="">
                        <img src={momo} alt="" />
                    </div>
                    <div>
                        <p className="text-xl text-white">March 20,2025</p>
                        <p className="text-xl text-white">WHERE CAN I GET SOME?</p>
                        <p className="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Link className="text-2xl text-white">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneItem;