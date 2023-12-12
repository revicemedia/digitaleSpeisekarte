/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { config } from "../Configs/config";

export function useContentful() {
  const [kategorien, setKategorien] = useState([]);
  const [produkte, setProdukte] = useState([]);
  const [allergene, setAllergene] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({
        content_type: "kategorien",
        order: "fields.sortierung",
        limit: 1000,
      })
      .then((res) => {
        setKategorien(res.items);
      })
      .catch((e) => setError(...error, e.message));

    client
      .getEntries({
        content_type: "produkte",
        order: "fields.name",
        limit: 1000,
      })
      .then((res) => {
        setProdukte(res.items);
      })
      .catch((e) => setError(...error, e.message));

    client
      .getEntries({ content_type: "allergene", order: "fields.nummerierung" })
      .then((res) => {
        setAllergene(res.items);
      })
      .catch((e) => setError(...error, e.message));

    config.options.locationHasNewsSlider &&
      client
        .getEntries({ content_type: "news" })
        .then((res) => {
          setEvents(res.items);
        })
        .catch((e) => setError(...error, e.message));

    setLoading(false);
  }, []);

  return { produkte, kategorien, allergene, events, loading, error };
}
