import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
  category: '',
  source: '',
  startDate: '',
  endDate: '',
  preferredSources: 'guardian',
  preferredCategories: '',
  preferredAuthors: '',
  page: 1, 
  pageSize: 10,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setPreferredSources: (state, action) => {
      state.preferredSources = action.payload;
    },
    setPreferredCategories: (state, action) => {
      state.preferredCategories = action.payload;
    },
    setPreferredAuthors: (state, action) => {
      state.preferredAuthors = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const {
  setKeyword,
  setCategory,
  setSource,
  setStartDate,
  setEndDate,
  setPreferredSources,
  setPreferredCategories,
  setPreferredAuthors,
  setPage,
  setPageSize,
} = newsSlice.actions;

export default newsSlice.reducer;
