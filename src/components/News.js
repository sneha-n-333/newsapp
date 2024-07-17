import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const News = ({ category, language }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;
      let apiUrl = `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=${apiKey}`;

      // Add category to API URL if provided
      if (category) {
        apiUrl += `&category=${category}`;
      }

      const response = await axios.get(apiUrl);
      setArticles(response.data.articles);
    };

    fetchNews();
  }, [category, language]);

  return (
    <div style={{ minHeight: '300px' }}>
       <h3 style={{margin:'0px 40px'}}>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Top Headlines'}</h3>
       
    <div className="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.urlToImage || 'default-image-url.jpg'}
              published_date={article.publishedAt}
            />
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
    </div>
  );
};

export default News;
