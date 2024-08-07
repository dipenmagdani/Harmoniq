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
        let url = `${apiUrl}${endpoint}`;

        if (id) {
          const cleanId = id.replace(/=$/, '');
          // Check if the endpoint already ends with a slash
          url = endpoint.endsWith('/')
            ? `${url}${cleanId}`
            : `${url}/${cleanId}`;
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
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);
    window.scroll(0, 0);
  }, [endpoint, id, setData, apiUrl]);

  return { isLoading, setIsLoading };
};

export default useApi;
