import { ReactElement } from "react";

import { useNavigate, useParams } from "react-router";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { fetchSelectionUpdateApi } from "../../../../api/fetch-selection-update.api.ts";
import { fetchSelectionFindOneApi } from "../../../../api/fetch-selection-find-one.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import LoadingComponent from "../../../../components/loading/loading.component.tsx";
import FormTextInputComponent from '../../../../components/form-text-input/form-text-input.component.tsx';

import { SelectionCreateDto } from "../../../../dto/selection-create.dto.ts";

import styles from "./edit.module.css";

export default function EditPage(): ReactElement {
  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    data: selection,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["selection", id],
    queryFn: () => fetchSelectionFindOneApi(id),
  });

  const mutation = useMutation({
    mutationFn: fetchSelectionUpdateApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["selection", id] }),
  });

  const { control, handleSubmit } = useForm<SelectionCreateDto>({
    values: {
      name: selection?.name ?? "",
      description: selection?.description ?? "",
    },
  });

  const formSubmitHandler: SubmitHandler<SelectionCreateDto> = (data): void => {
    mutation.mutate(
      { id: id!, dto: data },
      {
        onSuccess: (result) => {
          if ("error" in result) {
            toast.error(result.message);
          } else {
            toast.success(result.message);
            navigate("/dashboard/selection");
          }
        },
      },
    );
  };

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <>Something went wrong!</>;
  }

  return (
    <div className={styles.create}>
      <h1>Edit {selection?.name}</h1>
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
