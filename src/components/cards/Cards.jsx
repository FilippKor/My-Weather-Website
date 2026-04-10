import { useEffect, useRef, useState } from "react";
import "./Cards.css";
import { IoIosSearch } from "react-icons/io";
import sun from "../../accets/cards/sun.png";
function Parent() {
  const [data, setData] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      {/* Якщо дані є, показуємо температуру */}
      <h1>Місто: {data?.city || "Чекаю..."}</h1>
      <p>Температура: {data?.temp}°C</p>

      {/* Передаємо функцію, яка запише об'єкт у state */}
      <Child onSendObject={(obj) => setData(obj)} />
    </div>
  );
}
//https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=c208aa1c34d0cdc3afc589a0dd6af1f2
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c208aa1c34d0cdc3afc589a0dd6af1f2";

const [inputValue, setInputValue] = useState("");
{
  `https://api.openweathermap.org/data/2.5/weather?q='${inputValue}'&units=imperial&appid=c208aa1c34d0cdc3afc589a0dd6af1f2`;
}

const ArticleList = ({ articles, visibleCount, showMore }) => (
  <div className="pets">
    <div className="cards">
      <div className="cards-location">
        {articles.slice(0, visibleCount).map((article, index) => (
          <div key={article.url || index} className="pets-news">
            <p className="cards-location-city">{inputValue}</p>
            <p className="pets-news-headline">{article.title}</p>
          </div>
        ))}
        <p className="cards-loactation-country">U.S.A</p>
      </div>
      <div className="cards-time">
        <p className="cards-time-timer">14:00</p>
      </div>
      <div className="cards-forcast">
        <button className="cards-forcast-hourly">Hourly forcast</button>
        <button className="cards-forcast-weekly">Weekly forcast</button>
      </div>
      <div className="cards-fact">
        <p className="cards-fact-date">1/25/2026</p>
        <div className="cards-fact-line">|</div>
        <p className="cards-fact-day">Sunday</p>
      </div>
      <div className="cards-main">
        <img src={sun} alt="sun" className="cards-main-logo" />
        <p className="cards-main-temp">9999*C</p>
      </div>
      <div className="icons">
        <button className="icons-see"> See more </button>
      </div>
    </div>
    <div className="pets-box">
      {articles.slice(0, visibleCount).map((article, index) => (
        <div key={article.url || index} className="pets-news">
          <img
            loading="lazy"
            className="pets-news-picutre"
            src={
              article.urlToImage ||
              "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={article.title}
          />
          <p className="pets-news-headline">{article.title}</p>
        </div>
      ))}
    </div>

    {visibleCount < articles.length && (
      <button className="pets-more" onClick={showMore}>
        See more
      </button>
    )}
  </div>
);

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: "food",
            sortBy: "publishedAt",
            apiKey: API_KEY,
            pageSize: 40,
          },
        });

        const filteredArticles = response.data.articles.filter(
          (art) => art.urlToImage,
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Помилка при завантаженні новин:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="slider-container my-slider">
      <h2 className="slider-title">Pets News</h2>
      {isLoading && <p>Loading...</p>}

      {articles.length > 0 ? (
        <ArticleList
          articles={articles}
          visibleCount={visibleCount}
          showMore={handleShowMore}
        />
      ) : (
        !isLoading && <p>No news found</p>
      )}
    </div>
  );
};

// function Cards() {
//   return (
//     <div className="cards">
//       <div className="cards-location">
//         <p className="cards-location-city">Orlando</p>
//         <p className="cards-loactation-country">U.S.A</p>
//       </div>
//       <div className="cards-time">
//         <p className="cards-time-timer">14:00</p>
//       </div>
//       <div className="cards-forcast">
//         <button className="cards-forcast-hourly">Hourly forcast</button>
//         <button className="cards-forcast-weekly">Weekly forcast</button>
//       </div>
//       <div className="cards-fact">
//         <p className="cards-fact-date">1/25/2026</p>
//         <div className="cards-fact-line">|</div>
//         <p className="cards-fact-day">Sunday</p>
//       </div>
//       <div className="cards-main">
//         <img src={sun} alt="sun" className="cards-main-logo" />
//         <p className="cards-main-temp">9999*C</p>
//       </div>
//       <div className="icons">
//         <button className="icons-see"> See more </button>
//       </div>
//     </div>
//     // <header className='header'>
//     //     <h1 className="header-title">Weather dashboard</h1>
//     //     <div className="header-desc">
//     //         <p className="header-desc-title">Create your personal list of favorite cities and always be aware of the weather.</p>
//     //         <span className="header-desc-vertical-line"></span>
//     //         <p ref={date} className="header-desc-date"></p>
//     //          {date.toLocaleString()}
//     //     </div>
//     //     <form className="header-search" onSubmit={handleSearch}>
//     //         <input type="text" placeholder='Search location...' className='header-search-weather'/>
//     //         <button className="header-search-find">
//     //             <IoIosSearch className='header-search-find-icon'/>
//     //         </button>
//     //     </form>
//     // </header>
//   );
// }
export default Cards;
