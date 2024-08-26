import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPageSize } from '../../redux/newsSlice';

export default function PaginationPage() {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state) => state.news);

  const handlePageChange = (page, pageSize) => {
    dispatch(setPage(page));
    dispatch(setPageSize(pageSize));
  };

  return (
    <div className="flex justify-center mt-4">
      <Pagination
        current={page}
        pageSize={pageSize}
        total={500}
        onChange={handlePageChange}
        showSizeChanger
        pageSizeOptions={['10', '20', '30', '50']}
      />
    </div>
  );
}
