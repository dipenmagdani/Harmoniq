import { useState, useEffect, useCallback } from "react";

const useApi = (endpoint, id, setData) => {
  const [isLoading, setIsLoading] = useState(true);
  const cleanId = "";
  const url = "";
  const fetchData = useCallback(async () => {
    try {
      let url = `${endpoint}${cleanId}`; // Construct URL correctly

      // Remove trailing "=" from id if present
      if (id && id.includes("=")) {
        // Remove trailing "=" from id if present
        const cleanId = id.replace(/=$/, "");
        url = `${endpoint}/${cleanId}`; // Construct URL with cleaned id
      } else if (id) {
        url = `${endpoint}/${id}`; // Construct URL with original id
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch data error:", error.message);
      setIsLoading(false);
    }
  }, [endpoint, id, setData]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [fetchData]);

  return { isLoading };
};

export default useApi;
