import React from 'react';
import SlideItem from '../slide-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const SlideBar = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <SlideItem />
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem />
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem />
            </SwiperSlide>
      </Swiper>
    )
}

export default SlideBar;