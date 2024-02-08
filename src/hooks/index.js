import { useEffect, useState } from 'react';

export const useLoader = (loadData) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  const load = async () => {
    setLoading(true);
    try {
      const newData = await loadData();
      setData(newData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, isError };
};
