import React from 'react';

const Button = ({ type = 'button', label, onClick, className, ...rest }) => (
 <div>
     <button
    type={type}
    onClick={onClick}
    className={`py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    {...rest}
  >
    {label}
  </button>
 </div>
);

export default Button;
