import About from "../About/About";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";
import OneItem from "../OneItem/OneItem";
import Opening from "../Opening/Opening";
import ReconmendedFoods from "../Recomended/ReconmendedFoods";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Opening></Opening>
           <Category></Category>
           <About></About>
           <Menu></Menu>
           <CallUs></CallUs>
           <ReconmendedFoods></ReconmendedFoods>
           <OneItem></OneItem>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;