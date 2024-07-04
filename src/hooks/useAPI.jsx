import { useState, useEffect, useCallback } from "react";

const useApi = (urlOrEndpoint, id, setData) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      let url;
      if (urlOrEndpoint.includes("http")) {
        // If the urlOrEndpoint is a full URL, use it directly
        url = urlOrEndpoint;
      } else {
        // Otherwise, construct the URL
        url = `${
          import.meta.env.VITE_HARMONIQ_API_KEY
        }/${urlOrEndpoint}?id=${id}`;
      }

      const response = await fetch(url);
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [urlOrEndpoint, id, setData]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1500);
    window.scrollTo(0, 0);
  }, [fetchData]);

  return { isLoading };
};

export default useApi;
