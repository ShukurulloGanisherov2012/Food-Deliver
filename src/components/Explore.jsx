import React, { useEffect, useState } from 'react';
import './css/Explore.css';
import { menu_list } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Explore({ category, setCategory }) {
    const [slidesPerView, setSlidesPerView] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(2);
            } else if (window.innerWidth <= 1024) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(6);
            }
        };

        // Initial check
        handleResize();

        // Window resize event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='explore' id='explore'>
            <h1>Explore our menu</h1>
            <p className='explore-txt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aliquid tenetur exercitationem quas nihil pariatur fuga dolorum? Quasi sint sit aspernatur expedita nam culpa asperiores molestiae! Exercitationem natus cupiditate officiis eos quae perferendis sequi voluptatibus.
            </p>

            <Swiper
                slidesPerView={slidesPerView} // Dinamik o'zgaruvchan slaydlar soni
                spaceBetween={5}
                modules={[Pagination, Navigation]}
                className="explore-list"
            >
                {menu_list.map((item, index) => (
                    <SwiperSlide onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr />
        </div>
    );
}
