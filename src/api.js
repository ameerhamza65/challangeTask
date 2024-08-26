import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';

const fetchNews = async (params) => {
  let apiUrl = '';
  let queryParams = {};
const preferSource=params.preferredSources ||'guardian'
  if (preferSource === 'guardian') {
    apiUrl = 'https://content.guardianapis.com/search';
    queryParams = {
      'api-key': '26f5bcde-dca5-4a00-9005-27371ca29707',
      'show-fields': 'body,headline,thumbnail',
      ...(params.keyword && { q: params.keyword }),
      ...(params.category && { section: params.category }),
      ...(params.startDate && { 'from-date': params.startDate }),
      ...(params.endDate && { 'to-date': params.endDate }),
      ...(params.page && { page: params.page }),
      ...(params.pageSize && { 'page-size': params.pageSize }),
      ...(params.preferredCategories && { categories: params.preferredCategories }),
    };
  } else if (preferSource === 'newsapi') {
    apiUrl = 'https://newsapi.org/v2/everything';
    queryParams = {
      apiKey: 'c994a2ef28f444098596ec13fb474fc1',
      q: params.keyword || 'news',  
      ...(params.category && { category: params.category }),
      ...(params.startDate && { from: params.startDate }),
      ...(params.endDate && { to: params.endDate }),
      ...(params.page && { page: params.page }),
      ...(params.pageSize && { pageSize: params.pageSize }),
    };
  } else if (preferSource === 'newsdata') {
    apiUrl = 'https://newsdata.io/api/1/latest';
    queryParams = {
      apikey: 'pub_517790af90a1c8a3dac5144504da353637599',
      q: params.keyword || 'news',  
      ...(params.category && { category: params.category }),
      
  }
  }
  const { data } = await axios.get(apiUrl, {
    params: queryParams,
  });

  // Return results based on the API used
  if (preferSource === 'guardian') {
    return data.response.results;
  } else if (preferSource === 'newsapi') {
    return data.articles;
  } else if (preferSource === 'newsdata') {
    return data.results;
  }
};

export const useFetchNews = () => {
  const {
    keyword,
    category,
    startDate,
    endDate,
    preferredSources,
    preferredCategories,
    preferredAuthors,
    page,
    pageSize,
  } = useSelector((state) => state.news);

  return useQuery(['news', {
        keyword,
        category,
        startDate,
        endDate,
        preferredSources,
        preferredCategories,
        preferredAuthors,
        page,
        pageSize,
      },
    ],
    () =>
      fetchNews({
        keyword,
        category,
        startDate,
        endDate,
        preferredSources,
        preferredCategories,
        preferredAuthors,
        page,
        pageSize,
      }),
    {
      enabled: true, 
    }
  );
};
