import { ComponentProps, ReactElement } from "react";

import { FieldError } from "react-hook-form";

import clsx from "clsx";

import IconButtonComponent from "./components/icon-button/icon-button.component.tsx";
import ServerErrorsComponent from "./components/serverErrors/serverErrors.component.tsx";

import styles from "./form-text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
  clientError?: FieldError;
  serverErrors?: string[];
};

export default function FormTextInputComponent({
  label,
  suffixIcon,
  onSuffixClick,
  clientError,
  serverErrors,
  className,
  ...otherProps
}: Props): ReactElement {
  const isInvalid = clientError || (serverErrors && serverErrors.length > 0);

  return (
    <div className={clsx(styles["text-input"], className)}>
      <label className={clsx(isInvalid && styles.invalid)}>
        <div className={styles.title}>{label}</div>
        <div className={styles.box}>
          <input type="text" placeholder="" {...otherProps} />
          {suffixIcon && (
            <IconButtonComponent onClick={onSuffixClick}>
              {suffixIcon}
            </IconButtonComponent>
          )}
        </div>
      </label>
      <div className={styles["client-error"]}>{clientError?.message}</div>
      <ServerErrorsComponent
        className={styles["server-errors"]}
        serverErrors={serverErrors}
      />
    </div>
  );
}
