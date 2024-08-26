import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import PersonalizeModal from '../molecules/PersonalizeModal';


const NewsFilterForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <form className="p-4 space-y-4 flex flex-col lg:flex-row items-center lg:justify-between" onSubmit={handleSubmit(onSubmit)}>
        <Button
          type="button" 
          label="Personalize News Feed" 
          onClick={toggleModal} 
          className="mt-10 w-full lg:w-auto"
        />

        <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4">
          <div className="flex gap-4 w-full">
            <Input id="startDate" label="Start Date" type="date" register={register} />
            <Input id="endDate" label="End Date" type="date" register={register} />
          </div>

          <div className="w-full lg:w-auto">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              className="mt-1 block w-full px-3 w-full lg:w-auto py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register('category')}
            >
              <option value="">Select</option>
              <option value="">All Categories</option>
              <option value="technology">Technology</option>
              <option value="politics">Politics</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="flex flex-row w-full">
            <Input
              id="keyword"
              label="Keyword"
              placeholder="Search by keyword..."
              register={register}
              errors={errors}
              required={{ required: 'Keyword is required' }}
            />
            <Button type="submit" label="Search" className="ml-4 mt-6" />
          </div>
        </div>
      </form>

      <PersonalizeModal isOpen={isModalOpen} onClose={toggleModal}  />

    </>
  );
};

export default NewsFilterForm;
