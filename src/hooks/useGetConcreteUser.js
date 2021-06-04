import { useState, useEffect } from "react";
import { contentType, getTokenCookie, URL } from "../services/config";

const useGetConcreteUser = (userID) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});

  useEffect(() => {
    const get = async () => {
      setStatus("pending");
      try {
        const query = await fetch(`${URL}getUser`, {
          method: "post",
          headers: {
            ...contentType,
            Authorization: `Basic ${getTokenCookie()}`,
          },
          body: JSON.stringify({ userID }),
        });

        const data = await query.json();
        setData(data);
        setStatus("success");
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    };

    get();
  }, []);

  return { status, data };
};

export default useGetConcreteUser;
