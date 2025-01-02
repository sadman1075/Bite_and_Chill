import Desserts from "../Desserts/Desserts";
import Pizzas from "../Pizzas/Pizzas";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";
import TodaysOffers from "../TodaysOffers/TodaysOffers";

const OurMenu = () => {
    return (
        <div className="">
            <TodaysOffers></TodaysOffers>
            <Desserts></Desserts>
            <Pizzas></Pizzas>
            <Salads></Salads>
            <Soups></Soups>
            
        </div>
    );
};

export default OurMenu;