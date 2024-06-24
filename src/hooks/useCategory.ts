'use client';
import { API_URL, ICategory } from '@/types/common';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCategory = () => {
  const [data, setData] = useState<ICategory[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/category`);
      if (response) {
        setData(response.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    categories: data ?? [],
  };
};

export default useCategory;
