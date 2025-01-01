// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setreviews] = useState(null)
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <div className='ml-10 mr-10 lg:ml-32 lg:mr-32'>

            <div className="">
                <p className="text-2xl lg:text-3xl text-center text-yellow-500">---WHAT OUR CLIENTS SAY---</p>
                <div className="divider h-10 w-1/2 mx-auto "></div>
                <p className="text-3xl lg:text-5xl text-center ">CHEF TESTIMONIALS</p>
                <div className="divider h-10  w-1/2 mx-auto"></div>

            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className='m-16 lg:m-20'>
                            <Rating
                                style={{ maxWidth: 220 }}
                                value={review.rating}
                                className=' mx-auto'
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className='text-center text-yellow-500 mt-2 text-3xl'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonial;