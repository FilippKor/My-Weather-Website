import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Импорт необходимых стилей
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './Slider.css'; // Файл со стилями (см. ниже)
import axios from "axios";

// Устанавливаем базовый URL для Pixabay
// https://pixabay.com/api/?key=51105432-8d4562cf2c3045f8ca2a18ce0&q=%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0&lang=ru

axios.defaults.baseURL = "https://pixabay.com/api";

const API_KEY = "51105432-8d4562cf2c3045f8ca2a18ce0";

const ArticleList = ({ articles }) => (
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
        className="mySwiper">
    {articles.map(({ id, webformatURL, tags }) => (
        <SwiperSlide key={id}>
          <img loading="lazy" src={webformatURL} alt={tags} />
        </SwiperSlide>
    ))}
 </Swiper>
);

const ImageSlider = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        // Формируем запрос: ключ + параметры поиска
        const response = await axios.get(`/?key=${API_KEY}&q=%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0&lang=ru`);
        console.log(response)
        // У Pixabay данные лежат в response.data.hits
        setArticles(response.data.hits);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []); // Пустой массив зависимостей означает, что запрос выполнится 1 раз при монтировании

  return (
    <div className="slider-container my-slider">
    <h2 className="slider-title">Beautiful nature</h2>
      {isLoading && <p>Loading...</p>}
      {articles.length > 0 ? <ArticleList articles={articles} /> : !isLoading && <p>Null</p>}
    </div>
  );
};

export default ImageSlider;
