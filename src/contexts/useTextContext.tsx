'use client';

import { API_URL, IBlogMain, IMeta } from '@/types/common';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface ITextContext {
  dataBlog: IBlogMain[] | undefined | null;
  fetchBlog: () => void;
  meta: IMeta | undefined | null;
}

export const TextContext = React.createContext<ITextContext>({
  dataBlog: null,
  fetchBlog: () => {},
  meta: null,
});

export const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataBlog, setDataBlog] = React.useState<IBlogMain[]>();
  const [meta, setMeta] = React.useState<IMeta>();
  const searchParam = useSearchParams();
  const searchPage = searchParam.get('page');

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/post?isApprove=true&page=${searchPage}&limit=4`,
      );
      if (response) {
        setDataBlog(response?.data?.posts);
        setMeta(response?.data?.meta);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchBlog();
  }, [searchPage]);

  const context = React.useMemo(() => {
    return {
      dataBlog,
      fetchBlog,
      meta,
    };
  }, [dataBlog, fetchBlog, meta]);

  return (
    <TextContext.Provider value={context}>{children}</TextContext.Provider>
  );
};
