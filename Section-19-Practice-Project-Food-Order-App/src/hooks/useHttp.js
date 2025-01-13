import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, configuration) {
  const resp = await fetch(url, configuration);

  const respData = await resp.json();

  if (!resp.ok) {
    throw new Error(
      respData.message || "Something went wrong, failed to send request!"
    );
  }

  return respData;
}

export default function useHttp(url, configuration, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const respData = await sendHttpRequest(url, configuration);

        setData(respData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    [url, configuration]
  );

  useEffect(() => {
    if (
      (configuration &&
        (configuration.method === "GET" || !configuration.method)) ||
      !configuration
    ) {
      sendRequest();
    }
  }, [sendRequest, configuration]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
