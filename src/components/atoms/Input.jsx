import React from 'react';

const Input = ({ id, label, type = 'text', register, errors, placeholder,width, ...rest }) => (
  <div className='w-full'> 
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...register(id, rest)}
    />
    {errors && errors[id] && <p className="mt-2 text-sm text-red-600">{errors[id].message}</p>}
  </div>
);

export default Input;
