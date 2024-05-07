import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';
import React from 'react';
import expoService from '../services/api/requests/expo.service';
import { GetNewsTypes } from '../services/api/types/getNewsTypes';

const useGetNews = () => {
  const {
    isError: newsIsError,
    isLoading: newsIsLoading,
    data: newsData,
    isSuccess: newsIsSuccess,
  } = useQuery({
    queryKey: ['newsData'],
    queryFn: (): AxiosPromise<GetNewsTypes> => expoService.getNews(),
    select: ({ data }) => data,
  });

  return {
    newsIsError,
    newsIsLoading,
    newsData,
    newsIsSuccess,
  };
};

export default useGetNews;
