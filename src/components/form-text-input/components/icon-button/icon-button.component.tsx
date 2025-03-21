import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./icon-button.module.css";

type Props = ComponentProps<"button">;

export default function IconButtonComponent({
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      type="button"
      className={clsx(styles["icon-button"], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}
