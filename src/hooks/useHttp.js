import { useState, useCallback } from 'react';

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig, dataHandler) => {
    setIsLoading(true);

    try {
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null
      });

      if (!res.ok) {
        throw new Error('Request went wrong');
      }

      const data = await res.json();
      dataHandler(data);
    }
    catch (err) {
      setError(err.message);
    }

    setIsLoading(false);

  }, []);

  return {isLoading, error, sendRequest};
};

export default useHttp;
