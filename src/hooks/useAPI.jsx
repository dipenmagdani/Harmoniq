import { useState, useEffect, useCallback } from "react";

const useApi = (endpoint, id, setData) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_HARMONIQ_API_KEY}/${endpoint}?id=${id}`
      );
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [endpoint, id, setData]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1500);
    window.scrollTo(0, 0);
  }, [fetchData]);

  return { isLoading };
};

export default useApi;
