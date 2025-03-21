import { ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { fetchMovieApi } from "../../api/fetch-movie.api.ts";

import MovieDetailsComponent from "./components/movie-details/movie-details.component.tsx";

import styles from "./movie.module.css";

function MoviePage(): ReactElement {
  const { id } = useParams();

  const { data: movie, isFetching } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieApi(id),
    staleTime: 60 * 1000,
  });

  if (isFetching || !movie) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles.movie}>
      <MovieDetailsComponent movie={movie} />
    </div>
  );
}

export default MoviePage;