import about from "../../../assets/home/chef-service.jpg"
const About = () => {
    return (
        <div className="mt-10 mb-10 lg:mt-32 lg:mb-32">
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${about})` }}>
                <div className="p-10 lg:p-32 ">
                    <div className="bg-white p-2 lg:p-10 rounded-xl">
                        <p className="text-3xl lg:text-5xl font-semibold text-center mt-5">BITE & CHILL</p>
                        <p className="text-lg font-semibold text-center mt-5 text-justify">Bite and Chill is a vibrant and welcoming restaurant that brings people together to enjoy delicious meals in a relaxed atmosphere. Our menu features a diverse range of mouth-watering dishes, from comfort food to contemporary favorites, ensuring there’s something for everyone. Whether you're grabbing a quick bite or chilling with friends, Bite and Chill offers the perfect setting for any occasion. Enjoy our signature cocktails, freshly made dishes, and exceptional service while you unwind and savor every moment. Come for the food, stay for the vibes!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;