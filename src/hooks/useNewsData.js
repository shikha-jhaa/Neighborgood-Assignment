import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = '4e48ecb0780ffd42dc8db631fe62471b';
        console.log('API Key:', apiKey); // Debugging line

        if (!apiKey) {
          throw new Error("API key is missing");
        }

        const baseUrl = `https://gnews.io/api/v4/top-headlines`;
        const categoryParam = category ? `&topic=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const apiUrl = `${baseUrl}?category=general&lang=en&country=us&max=10${categoryParam}${searchParam}&apikey=${apiKey}`;

        console.log('API URL:', apiUrl); // Debugging line

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;
