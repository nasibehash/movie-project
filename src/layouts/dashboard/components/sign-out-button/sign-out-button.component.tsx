import { ReactElement } from "react";

import { useNavigate } from "react-router";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { fetchSignOutApi } from "../../../../api/fetch-sign-out.api.ts";

import MingcuteExitLine from "../../../../icons/MingcuteExitLine.tsx";

import styles from "./sign-out-button.module.css";

export default function SignOutButtonComponent(): ReactElement {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchSignOutApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const signOutButtonClickHandler = (): void => {
    mutation.mutate(undefined, {
      onSuccess: (result) => {
        if (result.statusCode !== 200) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
          navigate("/");
        }
      },
    });
  };

  return (
    <button
      className={styles["sign-out-button"]}
      onClick={signOutButtonClickHandler}
    >
      <MingcuteExitLine />
      Sign Out
    </button>
  );
}
