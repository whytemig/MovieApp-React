import { useEffect, useState } from "react";

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const api = "b949fff1";

  useEffect(() => {
    callBack?.();
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${api}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("404 Error ");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found ");
        setMovies(data.Search);
        setError("");
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return { loading, error, movies };
}
