import { ReactElement, useState } from "react";

import { Link, useNavigate } from "react-router";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { fetchSignInApi } from "../../../../api/fetch-sign-in.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import PasswordInputComponent from "../../../../components/password-input/password-input.component.tsx";
import FormTextInputComponent from "../../../../components/form-text-input/form-text-input.component.tsx";

import { ValidationErrors } from "../../../../dto/response.dto.ts";
import { SignInDto } from "../../../../dto/sign-in.dto.ts";

import styles from "../../styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] =
    useState<ValidationErrors<SignInDto>>();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchSignInApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const { control, handleSubmit } = useForm<SignInDto>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formSubmitHandler: SubmitHandler<SignInDto> = (data): void => {
    mutation.mutate(data, {
      onSuccess: (result) => {
        if ("error" in result) {
          setServerErrors(result.validationErrors);
          toast.error(result.message);
        } else {
          toast.success(result.message);
          navigate("/dashboard");
        }
      },
    });
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <FormTextInputComponent
              label="Username"
              serverErrors={serverErrors?.username}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <PasswordInputComponent
              label="Password"
              autoComplete="current-password"
              serverErrors={serverErrors?.password}
              {...field}
            />
          )}
        />
        <ButtonComponent>Sign In</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Haven't signed up yet? <Link to="/auth/sign-up">Sign up</Link>.
      </div>
    </div>
  );
}
