
const Dessert = ({dessert}) => {
    const {image,name,recipe,price}=dessert
    return (
        <div className="flex gap-4 p-2">
            <div>
                <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[100px]" src={image} alt="" />
            </div>
            <div>
                <p className="text-2xl">{name}-------------</p>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500 text-xl">${price}</p>
            </div>
        </div>
    );
};

export default Dessert;