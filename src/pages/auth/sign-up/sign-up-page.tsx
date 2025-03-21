import { ReactElement } from "react";

import SignUpFormComponent from "../components/sign-up-form/sign-up-form.component.tsx";

import styles from "./sign-up-page.module.css";

export default function SignUpPage(): ReactElement {
  return (
    <div className={styles["sign-up"]}>
      <SignUpFormComponent />
    </div>
  );
}
