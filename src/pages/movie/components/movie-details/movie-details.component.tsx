import { ReactElement, useState } from "react";

import clsx from "clsx";

import useConfigurationQuery from "../../../../queries/use-configuration.query.ts";

import { MovieType } from "../../../../types/movie.type.ts";

import styles from "./movie-details.module.css";

type Props = {
  movie: MovieType;
};

export default function MovieDetailsComponent({ movie }: Props): ReactElement {
  const { data: configuration } = useConfigurationQuery();

  const [isPosterImageBroken, setIsPosterImageBroken] =
    useState<boolean>(false);

  const [isBackdropImageBroken, setIsBackdropImageBroken] =
    useState<boolean>(false);

  return (
    <div className={styles["movie-details"]}>
      <div className={styles.backdrop}>
        {configuration && movie.backdrop_path && (
          <img
            className={clsx(isBackdropImageBroken && styles.broken)}
            src={`${configuration?.images.base_url}${configuration?.images.backdrop_sizes.at(-1)}${movie.backdrop_path}`}
            alt=""
            onError={() => setIsBackdropImageBroken(true)}
          />
        )}
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.poster}>
        {configuration && movie.poster_path && (
          <img
            className={clsx(isPosterImageBroken && styles.broken)}
            src={`${configuration?.images.base_url}${configuration?.images.poster_sizes.at(-1)}${movie.poster_path}`}
            alt=""
            onError={() => setIsPosterImageBroken(true)}
          />
        )}
      </div>
      <div className={styles.writings}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.tagline}>{movie.tagline}</div>
        <ul className={styles.genres}>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
