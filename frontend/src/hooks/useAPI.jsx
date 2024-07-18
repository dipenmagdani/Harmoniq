import { useState, useEffect } from 'react';

const useApi = (endpoint, id, setData) => {
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      if (!endpoint) {
        setIsLoading(false);
        return;
      }

      try {
        let url = endpoint;

        if (id) {
          const cleanId = id.replace(/=$/, '');
          url = `${apiUrl}${endpoint}/${cleanId}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch data error:', error.message);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);
    window.scroll(0, 0);
  }, [endpoint, id, setData]);

  return { isLoading, setIsLoading };
};

export default useApi;
