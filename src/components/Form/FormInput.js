import React from "react";
import { Controller } from "react-hook-form";

import { Input } from "../Input";

const FormInput = ({ name, control, onChange, ...restInput }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <Input
        onInputChange={(e) => {
          field?.onChange?.(e);
          onChange?.(e);
        }}
        errorMessage={error?.message}
        {...field}
        {...restInput}
      />
    )}
  />
);

export { FormInput };
