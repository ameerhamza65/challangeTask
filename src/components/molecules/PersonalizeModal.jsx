import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferredSources, setPreferredCategories, setPreferredAuthors } from '../../redux/newsSlice';

const PersonalizeModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const { preferredSources, preferredCategories, preferredAuthors } = useSelector((state) => state.news);

  useEffect(() => {
    if (isOpen) {
      reset({
        preferredSources: preferredSources || '', // Set default or empty value
        preferredCategories: preferredCategories || '',
        preferredAuthors: preferredAuthors || '',
      });
    }
  }, [isOpen, preferredSources, preferredCategories, preferredAuthors, reset]);

  const handleSave = (data) => {
    console.log(data);
    dispatch(setPreferredSources(data.preferredSources || ''));
    dispatch(setPreferredCategories(data.preferredCategories || ''));
    dispatch(setPreferredAuthors(data.preferredAuthors || ''));

    onClose();
    reset(); // Optional: Reset the form after saving
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personalize News Feed</h2>
        <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
          {/* Preferred Sources */}
          <div>
            <label htmlFor="preferredSources" className="block text-sm font-medium text-gray-700">Preferred Sources</label>
            <select
              id="preferredSources"
              {...register('preferredSources')}
              className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select</option>
              <option value="guardian">The Guardian</option>
              <option value="newsapi">NewsAPI.org</option>
              <option value="newsdata">NewAPI</option>
            </select>
          </div>

          {/* Preferred Categories */}
          <div>
            <label htmlFor="preferredCategories" className="block text-sm font-medium text-gray-700">Preferred Categories</label>
            <select
              id="preferredCategories"
              {...register('preferredCategories')}
              className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select</option>
              <option value="technology">Technology</option>
              <option value="politics">Politics</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          {/* Preferred Authors */}
          <Input id="preferredAuthors" label="Preferred Authors" register={register} placeholder="Enter preferred authors..." />

          {/* Save and Close Buttons */}
          <div className="flex justify-end space-x-2">
            <Button label="Cancel" onClick={onClose} className="bg-gray-300 text-gray-800 hover:bg-gray-400" />
            <Button type="submit" label="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalizeModal;
