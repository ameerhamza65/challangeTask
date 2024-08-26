import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { preferredSources } = useSelector((state) => state.news);
  const source=preferredSources||'guardian';
  const headline = source === 'guardian' ? news?.fields?.headline : 
                   source === 'newsapi' ? news?.title : 
                   source === 'newsdata' ? news?.title : '';
                   
  const thumbnail = source === 'guardian' ? news?.fields?.thumbnail : 
                    source === 'newsapi' ? news?.urlToImage : 
                    source === 'newsdata' ? news?.image_url : '';
                    
  const publicationDate = source === 'guardian' ? news?.webPublicationDate : 
                          source === 'newsapi' ? news?.publishedAt : 
                          source === 'newsdata' ? news?.publishedAt : '';
                          
  const sectionName = source === 'guardian' ? news?.sectionName : 
                      source === 'newsapi' ? news?.source?.name : 
                      source === 'newsdata' ? news?.source?.name : '';
                      
  const url = source === 'guardian' ? news.id?.replace(/\//g, '-') :
              source === 'newsapi' ? news?.url :
              source === 'newsdata' ? news?.link : '';

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={thumbnail || '/default-thumbnail.jpg'} // Provide a default image if none is available
        alt={headline}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{headline}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {new Date(publicationDate).toLocaleDateString()} | {sectionName}
        </p>
        {source === 'guardian' ? (
          <Link
            to={`/news/${url}`}
            className="block text-blue-500 font-semibold hover:underline"
          >
            Read More
          </Link>
        ) : (
          <a href={url} className='block text-blue-500 font-semibold hover:underline'>Read More</a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
