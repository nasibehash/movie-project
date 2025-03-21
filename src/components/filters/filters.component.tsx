import { ReactElement } from "react";

import GenreFilterComponent from "./components/genre-filter/genre-filter.component.tsx";

import styles from "./filters.module.css";

function FiltersComponent(): ReactElement {
  return (
    <div className={styles.filters}>
      <GenreFilterComponent />
    </div>
  );
}

export default FiltersComponent;
