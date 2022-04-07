import React from "react";
import { Controller } from "react-hook-form";
import Checkbox from "components/Checkbox";

const FormCheckbox = ({ name, control, ...restInput }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <Checkbox
        onInputChange={field.onChange}
        errorMessage={error?.message}
        {...field}
        {...restInput}
      />
    )}
  />
);

export { FormCheckbox };
