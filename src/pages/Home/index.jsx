import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import NewsCard from '../../components/molecules/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  setKeyword,
  setCategory,
  setStartDate,
  setEndDate,
  setPage,
  setPreferredSources, 
} from '../../redux/newsSlice';
import { useFetchNews } from '../../api';
import NewsFilterForm from '../../components/organisms/NewsFilterForm ';
import PaginationPage from '../../components/atoms/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchNews();
  
  const {
  
    preferredSources,
   
  } = useSelector((state) => state.news);
  
  const handleFormSubmit = (formData) => {
    console.log(formData);
    dispatch(setKeyword(formData.keyword || ''));
    dispatch(setCategory(formData.category || ''));
    dispatch(setStartDate(formData.startDate || ''));
    dispatch(setEndDate(formData.endDate || ''));
    setCurrentPage(1); 
    dispatch(setPage(1));
    dispatch(setPreferredSources(formData.preferredSources || 'guardian')); 
  };
console.log(preferredSources,'__data')
  return (
    <Layout error={error} isLoading={isLoading}>
      <NewsFilterForm onSubmit={handleFormSubmit} />
      
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? (
          data?.map((news) => (
            <NewsCard news={news} key={news?.id || news?.url}  />  
          ))
        ) : (
          <div className="text-center text-xl font-bold w-full lg:w-auto">No news available</div>
        )}
      </div>
      
      {data?.length > 0 && (
        <PaginationPage />
      )}
    </Layout>
  );
};

export default Home;
