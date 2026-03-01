import React from 'react';
// Импорт Swiper React компонентов
import { Swiper, SwiperSlide } from 'swiper/react';

// Импорт необходимых стилей
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Импорт модулей Swiper
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import './Slider.css'; // Файл со стилями (см. ниже)

const ImageSlider = () => {
  return (
    <div className="slider-container my-slider">
        <h2 className="slider-title">Beautiful nature</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,        // Угол поворота (0 для плоских слайдов как на фото)
          stretch: 80,      // Накладывание слайдов друг на друга
          depth: 200,       // Глубина (удаление боковых слайдов)
          modifier: 1,      // Множитель эффекта
          slideShadows: true, // Тени на боковых слайдах
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="nature" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
