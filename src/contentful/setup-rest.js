/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as contentful from "contentful";

export function useContentful() {
  const [kategorien, setKategorien] = useState([]);
  const [produkte, setProdukte] = useState([]);
  const [allergene, setAllergene] = useState([]);
  const [error, setError] = useState(null);

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({ content_type: "kategorien", order: "fields.sortierung" })
      .then((res) => {
        setKategorien(res.items);
      })
      .catch((e) => setError(...error, e.message));

    client
      .getEntries({ content_type: "produkte" })
      .then((res) => {
        setProdukte(res.items);
      })
      .catch((e) => setError(...error, e.message));

    client
      .getEntries({ content_type: "allergene" })
      .then((res) => {
        setAllergene(res.items);
      })
      .catch((e) => setError(...error, e.message));
  }, []);

  return { produkte, kategorien, allergene, error };
}
