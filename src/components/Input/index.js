import React from "react";
import classNames from "classnames";

const Input = React.forwardRef(
  (
    {
      label,
      name,
      isRequired,
      className,
      inputClassName,
      inputElementClassName,
      value,
      labelClassName,
      children,
      onInputChange,
      errorMessage,
      isTextarea,
      autoComplete,
      ...rest
    },
    ref
  ) => (
    <div className={classNames("relative w-full mb-3", className)}>
      {label && (
        <label
          className={classNames(
            "block uppercase text-blueGray-600 text-xs font-bold mb-2",
            labelClassName
          )}
          htmlFor={name}
        >
          {label} {isRequired && <sup className="text-red-500 text-xs">*</sup>}
        </label>
      )}
      {isTextarea ? (
        <textarea
          {...rest}
          ref={ref}
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          autoComplete={autoComplete}
          onChange={(event) => onInputChange?.(event.target.value)}
        />
      ) : (
        <div className="position-relative">
          <input
            {...rest}
            ref={ref}
            className={classNames(
              "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:border-0 w-full ease-linear transition-all duration-150",
              inputElementClassName
            )}
            autoComplete={autoComplete}
            value={value || ""}
            onChange={(event) => onInputChange?.(event.target.value)}
          />
        </div>
      )}
      {errorMessage && (
        <span className={classNames("text-rose-500 text-xs")}>
          {errorMessage}
        </span>
      )}
    </div>
  )
);

export { Input };
