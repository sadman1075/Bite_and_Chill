import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

const Category = () => {
    return (
        <div className='mt-10 mb-10 lg:mt-32 lg:mb-32'>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img className='' src={slide1}></img>
                    <p className='lg:text-4xl text-white text-center -mt-20'>SALADS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}></img>
                    <p className='lg:text-4xl text-white text-center -mt-20'>PIZZA</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}></img>
                    <p className='lg:text-4xl text-white text-center -mt-20'>SOUP</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}></img>
                    <p className='lg:text-4xl text-white text-center -mt-20'>CAKE</p>

                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}></img>
                    <p className='lg:text-4xl text-white text-center -mt-20'>SALADS</p>

                    </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;