import React, { useState, useEffect } from "react";
import axios from "axios";
import './Pets.css';


const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "93c4e029e9004d999b63425d40adcae7";


const ArticleList = ({ articles, visibleCount, showMore }) => (
  <div className='pets'> 
    <div className="pets-box">
      {articles.slice(0, visibleCount).map((article, index) => (
        <div key={article.url || index} className="pets-news">
          <img 
            loading="lazy" 
            className='pets-news-picutre'
            src={article.urlToImage || 'https://via.placeholder.com/400x300?text=No+Image'} 
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

const Pets = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            q: 'food',
            sortBy: 'publishedAt',
            apiKey: API_KEY,
            pageSize: 40 
          }
        });
        
        const filteredArticles = response.data.articles.filter(art => art.urlToImage);
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
    setVisibleCount(prevCount => prevCount + 4);
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

export default Pets;
