import React from 'react';

const NewsCard = ({ title, description, url, imageUrl,published_date }) => {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='published-date'>{published_date}</p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default NewsCard;
