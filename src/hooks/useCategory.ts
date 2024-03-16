"use client";
import { API_URL } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

interface CategoryData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const useCategory = () => {
  const [data, setData] = useState<CategoryData[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/category`);
      if (response) {
        console.log(response);
        setData(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    categories: data ?? [],
  };
};

export default useCategory;
