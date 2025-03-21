import { ReactElement } from "react";

import MovieListComponent from "../../components/movie-list/movie-list.component.tsx";
import Filters from "../../components/filters/filters.component.tsx";

import styles from "./home.module.css";

function HomePage(): ReactElement {
  return (
    <div className={styles.home}>
      <Filters />
      <MovieListComponent />
    </div>
  );
}

export default HomePage;
