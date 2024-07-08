import { useState, useEffect } from 'react';

const useApi = (endpoint, id, setData) => {
  const [isLoading, setIsLoading] = useState(true);

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
          url = `${endpoint}/${cleanId}`;
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

    fetchData();
  }, [endpoint, id, setData]);

  return { isLoading };
};

export default useApi;