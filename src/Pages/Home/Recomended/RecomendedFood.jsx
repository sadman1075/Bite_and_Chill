
const RecomendedFood = ({ item }) => {
    const { name, price, recipe, image } = item
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className=" ">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p><b>Price: </b> {price} $</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendedFood;