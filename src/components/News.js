import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const News = ({ category, language }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        let apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=${language}`;

        // Add category to API URL if provided
        if (category) {
          apiUrl += `&topic=${category}`;
        }

        const response = await axios.get(apiUrl);
        const fetchedArticles = response.data.articles;

        if (fetchedArticles.length === 0) {
          setError(`No news articles available for the category "${category}" in language "${language}".`);
        } else {
          setArticles(fetchedArticles);
          setError(null);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news.');
      }
    };

    fetchNews();
  }, [category, language]);

  return (
    <div style={{ minHeight: '300px' }}>
      <h3 style={{ margin: '0px 40px' }}>
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Top Headlines'}
      </h3>

      <div className="news-container">
        {error ? (
          <p>{error}</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.image || 'default-image-url.jpg'}
              published_date={article.publishedAt}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default News;

