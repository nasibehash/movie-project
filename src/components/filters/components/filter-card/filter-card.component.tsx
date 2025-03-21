import { PropsWithChildren, ReactElement } from "react";

import styles from "./filter-card.module.css";

type Props = PropsWithChildren<{
  title: string;
}>;

export default function FilterCardComponent({
  children,
  title,
}: Props): ReactElement {
  return (
    <div className={styles["filter-card"]}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
