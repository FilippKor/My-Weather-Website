import React, { useState, useEffect } from "react";
import axios from "axios";
import './Pets.css';
axios.defaults.baseURL = "https://newsapi.org/v2";
const API_KEY = "93c4e029e9004d999b63425d40adcae7";

const ArticleList = ({ articles }) => (
  <div className='pets'> 
  <p className="pets-title">Interacting with our pets</p>
    <div className="pets-box">
    {articles.map((article, index) => (
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
    <button className="pets-more">See more</button>
  </div>
);

const Pets = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/everything`, {
          params: {
            q: 'pets',
            sortBy: 'publishedAt',
            apiKey: API_KEY,
            pageSize: 3 
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

  return (
    <div className="slider-container my-slider">
      <h2 className="slider-title">Pets News</h2>
      {isLoading && <p>Loading...</p>}
      {articles.length > 0 ? (<ArticleList articles={articles} />) : (!isLoading && <p>No news found</p>)}
    </div>
  );
};

export default Pets;
