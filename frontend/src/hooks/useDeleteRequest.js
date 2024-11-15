import { useState } from "react";
import client from "../api/client";
import { toastError, toastSuccess } from "../helpers/toast";

const useDeleteRequest = (url, id, options = {}) => {
  const [loading, setLoading] = useState("loading");
  const [error, setError] = useState(null);

  const deleteHandler = async () => {
    setError(null);
    const [responseData, responseErrors] = await client.delete(
      url,
      id,
      options
    );
    if (responseErrors) {
      setError(responseErrors);
      setLoading("failed");
      toastError(responseErrors);
    } else {
      setLoading("succeeded");
      toastSuccess("Deleted successfully!")
    }
    return [responseData, responseErrors]
  };

  return {
    deleteHandler,
    loading,
    error,
  };
};

export default useDeleteRequest;
