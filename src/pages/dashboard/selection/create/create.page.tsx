import { ReactElement } from "react";

import { useNavigate } from "react-router";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { fetchSelectionCreateApi } from "../../../../api/fetch-selection-create.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import FormTextInputComponent from "../../../../components/form-text-input/form-text-input.component.tsx";

import { SelectionCreateDto } from "../../../../dto/selection-create.dto.ts";

import styles from "./create.module.css";

export default function CreatePage(): ReactElement {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchSelectionCreateApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["selections"] }),
  });

  const { control, handleSubmit } = useForm<SelectionCreateDto>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const formSubmitHandler: SubmitHandler<SelectionCreateDto> = (data): void => {
    mutation.mutate(data, {
      onSuccess: (result) => {
        if ("error" in result) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
          navigate("/dashboard/selection");
        }
      },
    });
  };

  return (
    <div className={styles.create}>
      <h1>Create Selection</h1>
      <form className="card" onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => <FormTextInputComponent label="Name" {...field} />}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <FormTextInputComponent label="Description" {...field} />
          )}
        />
        <ButtonComponent>Submit</ButtonComponent>
      </form>
    </div>
  );
}
