import { useState, useEffect } from "react";
import client from "../api/client";

const UseGetRequest = (url, param, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState("loading");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    const [responseData, responseErrors] = await client.get(
      url,
      param,
      options
    );
    if (responseErrors) {
      setError(responseErrors);
      setLoading("failed");
    } else {
      setData(responseData);
      setLoading("succeeded");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default UseGetRequest;
