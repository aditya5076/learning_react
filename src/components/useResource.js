import { useState, useEffect } from "react";
import Jsonplaceholder from "../apis/Jsonplaceholder";

// reusable function
const useResource = (resource) => {
  const [resources, setResources] = useState([]);

  //   const fetchResponse = async (resource) => {
  //     const response = await Jsonplaceholder.get(resource);
  //     setResources(response.data);
  //   };

  useEffect(() => {
    // calling and invoking the function at sametime for not getting clean define error
    (async (resource) => {
      const response = await Jsonplaceholder.get(resource);
      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

export default useResource;
