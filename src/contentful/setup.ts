import { useState, useEffect } from "react";

export function useContentful(query: string) {
  const [data, setData] = useState({});
  // const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
      });
  }, [query]);

  return { data };
}
