import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchNews } from '../../api';
import Loader from '../../components/atoms/Loader';
import Breadcrumb from '../../components/atoms/Breadcrumbs';
import { useSelector } from 'react-redux';
const breadcrumbItems = [
  { label: "New Aggregator", url: "/" },
  { label: "News Detail", url: "" },
];
const NewsDetails = () => {
  const { newsId } = useParams();
  const { data, isLoading, error } = useFetchNews();
  const {preferredSources} = useSelector((state) => state.news);
  console.log(data);  
  const newsItem =preferredSources=="guardian" ? data?.find((item) => item.id?.replace(/\//g, '-') === newsId): data?.find((item) => item.url.replace(/\//g, '-') === newsId);


  if (isLoading) return <p><Loader/></p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!newsItem) {
    return <div className="text-center text-xl">News article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Breadcrumb items={breadcrumbItems}/>
      <h1 className="text-3xl font-bold mb-4">{newsItem.fields.headline}</h1>
      <p className="text-sm text-gray-600 mb-8">
        {new Date(newsItem.webPublicationDate).toLocaleDateString()} | {newsItem.sectionName}
      </p>
      <img
        src={newsItem.fields.thumbnail}
        alt={newsItem.fields.headline}
        className="w-full h-auto mb-8 rounded"
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: newsItem.fields.body }}
      />
    
    </div>
  );
};

export default NewsDetails;
