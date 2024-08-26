import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-white"></div>
      
    </div>
  );
};

export default Loader;
