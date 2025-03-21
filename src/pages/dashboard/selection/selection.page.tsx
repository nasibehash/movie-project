import { ReactElement } from "react";

import { Link, useNavigate } from "react-router";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { fetchSelectionFindAllApi } from "../../../api/fetch-selection-find-all.api.ts";
import { fetchSelectionRemoveApi } from "../../../api/fetch-selection-remove.api.ts";

import ButtonComponent from "../../../components/button/button.component.tsx";
import LoadingComponent from "../../../components/loading/loading.component.tsx";

import MingcuteEdit2Line from "../../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../../icons/MingcuteDelete2Line.tsx";

import styles from "./selection.module.css";

export default function SelectionPage(): ReactElement {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isPending, isError } = useQuery({
    queryKey: ["selections"],
    queryFn: fetchSelectionFindAllApi,
  });

  const mutation = useMutation({
    mutationFn: fetchSelectionRemoveApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["selections"] }),
  });

  const editButtonClickHandler = (id: number): void => {
    navigate(`/dashboard/selection/${id}/edit`);
  };

  const removeButtonClickHandler = (id: number): void => {
    mutation.mutate(id, {
      onSuccess: (result) => {
        if ("error" in result) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
        }
      },
    });
  };

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <>Something went wrong!</>;
  }

  return (
    <div className={styles.selection}>
      <h1>Selections</h1>
      <ul>
        {data.map((selection) => (
          <li key={selection.id} className="card">
            <Link
              to={`/dashboard/selection/${selection.id}`}
              className={styles.name}
            >
              {selection.name}
            </Link>
            <div className={styles.description}>{selection.description}</div>
            <div className={styles.actions}>
              <ButtonComponent
                color="primary"
                variant="ghost"
                size="small"
                className={styles.edit}
                onClick={() => editButtonClickHandler(selection.id)}
              >
                <MingcuteEdit2Line />
              </ButtonComponent>
              <ButtonComponent
                color="danger"
                variant="ghost"
                size="small"
                className={styles.remove}
                onClick={() => removeButtonClickHandler(selection.id)}
              >
                <MingcuteDelete2Line />
              </ButtonComponent>
            </div>
          </li>
        ))}
        <li className={styles.create}>
          <Link to="/dashboard/selection/create">+</Link>
        </li>
      </ul>
    </div>
  );
}
