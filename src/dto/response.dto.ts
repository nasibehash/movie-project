type SuccessResponseDto<TResult> = TResult extends void
  ? { result?: undefined }
  : { result: TResult };

export type ValidationErrors<TFields = void> = TFields extends void
  ? undefined
  : Record<keyof TFields, string[]>;

type ErrorResponseDto<TFields = void> = {
  error: string;
  validationErrors: ValidationErrors<TFields>;
};

export type ResponseDto<TResult = void, TFields = void> = {
  statusCode: number;
  message: string;
} & (SuccessResponseDto<TResult> | ErrorResponseDto<TFields>);
