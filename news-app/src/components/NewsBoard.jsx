import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3747f0d008cc4387a84f2aebeab59a0a`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2 className='container-fluid p-3 display-6'>Latest news</h2>

      <div className="container-fluid">
        <div className="row">
          {articles.map((news, index) => (
            news.urlToImage && <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsboard;
