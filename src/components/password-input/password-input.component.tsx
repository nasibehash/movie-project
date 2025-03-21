import { ComponentProps, ReactElement, useState } from "react";

import MingcuteEyeCloseLine from "../../icons/MingcuteEyeCloseLine.tsx";
import MingcuteEye2Line from "../../icons/MingcuteEye2Line.tsx";

import FormTextInputComponent from "../form-text-input/form-text-input.component.tsx";

type Props = ComponentProps<typeof FormTextInputComponent>;

export default function PasswordInputComponent({
  ...otherProps
}: Props): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <FormTextInputComponent
      type={isVisible ? "text" : "password"}
      suffixIcon={isVisible ? <MingcuteEyeCloseLine /> : <MingcuteEye2Line />}
      onSuffixClick={() => setIsVisible((old) => !old)}
      {...otherProps}
    />
  );
}
