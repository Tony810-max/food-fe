import { API_URL, IProvince } from '@/types/common';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useProvinces = () => {
  const [provinces, setProvinces] = useState<IProvince[]>([]);

  const fetchProvinces = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/metadata/provinces`);
      if (response) {
        setProvinces(response?.data?.data);
      }
    } catch (error) {
      return null;
    }
  }, []);

  useEffect(() => {
    fetchProvinces();
  }, [fetchProvinces]);
  return {
    provinces,
  };
};
