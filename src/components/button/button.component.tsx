import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Color = "primary" | "danger";
type Variant = "solid" | "outlined" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

export default function ButtonComponent({
  color = "primary",
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[color],
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
