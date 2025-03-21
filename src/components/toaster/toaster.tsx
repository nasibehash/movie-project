import { ReactElement } from "react";

import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

type Props = Partial<ToastContainerProps>;

function Toaster(props: Props): ReactElement {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={"light"}
      transition={Bounce}
      aria-label={undefined}
      {...props}
    />
  );
}

export default Toaster;
