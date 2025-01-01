import React, { useEffect, useState } from 'react';
import RecomendedFood from './RecomendedFood';

const ReconmendedFoods = () => {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularItems = data.filter(item => item.category === "popular")
                setItems(popularItems)
            })

    }, [])
    console.log(items)
    return (
        <div>
            <div className="mt-10 mb-10 lg:mt-32 lg:mb-32">
                <p className="text-2xl lg:text-3xl text-center text-yellow-500">---SHOULD TRY---</p>
                <div className="divider h-10 w-1/2 mx-auto "></div>
                <p className="text-3xl lg:text-5xl text-center">CHEF RECOMMENDS</p>
                <div className="divider h-10  w-1/2 mx-auto"></div>

            </div>
            <div className='mt-10'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {
                        items?.map(item => <RecomendedFood key={item._id} item={item}></RecomendedFood>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReconmendedFoods;