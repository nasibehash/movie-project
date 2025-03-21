import { ReactElement } from "react";

import SignInFormComponent from "../components/sign-in-form/sign-in-form.component.tsx";

import styles from "./sign-in.module.css";

function SignInPage(): ReactElement {
  return (
    <div className={styles["sign-in"]}>
      <SignInFormComponent />
    </div>
  );
}

export default SignInPage;
