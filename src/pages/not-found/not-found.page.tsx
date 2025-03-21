import { ReactElement } from "react";

import styles from "./not-found.module.css";

function NotFoundPage(): ReactElement {
  return <div className={styles["not-found"]}>صفحه‌ی مورد نظر پیدا نشد.</div>;
}

export default NotFoundPage;
