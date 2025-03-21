import { ReactElement, useState } from "react";

import {
  flip,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";

import clsx from "clsx";

import MingcuteWarningLine from "../../../../icons/MingcuteWarningLine.tsx";

import IconButtonComponent from "../icon-button/icon-button.component.tsx";

import styles from "./serverErrors.module.css";

type Props = {
  className?: string;
  serverErrors?: string[];
};

export default function ServerErrorsComponent({
  className,
  serverErrors,
}: Props): ReactElement {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isPopoverOpen,
    onOpenChange: setIsPopoverOpen,
    placement: "bottom-start",
    middleware: [flip()],
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        <IconButtonComponent
          className={clsx(
            styles.toggle,
            serverErrors && serverErrors.length > 0 && styles.visible,
            className,
          )}
        >
          <MingcuteWarningLine />
        </IconButtonComponent>
      </div>
      {serverErrors && isPopoverOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <ol className={styles.errors}>
            {serverErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
