import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useFetch(fullPath) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // console.log("useFetch triggered with fullPath:", fullPath);
    const fetchData = async () => {
      try {
        const response = await fetch(fullPath);
        const data = await response.json();
        setData(data);
        setIsLoaded(true);

        if (!response.ok) {
          setIsLoaded(false);
        }
      } catch (error) {
        toast.error(
          "An error occurred during the request. Please try again later"
        );
        setIsLoaded(false);
      }
    };

    fetchData();
  }, [fullPath]);

  return { data, isLoaded };
}
