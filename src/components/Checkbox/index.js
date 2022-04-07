import React from "react";
import classNames from "classnames";

const Checkbox = React.forwardRef(
  (
    {
      label,
      name,
      checked,
      isRequired,
      checkboxClassName,
      inputClassName,
      errorMessage,
      disabled,
      onChange,
      onBlur,
      onFocus,
      onInputChange,
      ...rest
    },
    ref
  ) => (
    <div>
      <div
        className={classNames(
          "inline-flex items-center cursor-pointer",
          checkboxClassName
        )}
      >
        <input
          type="checkbox"
          className={classNames(
            "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 cursor-pointer ease-linear transition-all duration-150",
            inputClassName
          )}
          ref={ref}
          id={name}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          {...rest}
        />
        <label className="cursor-pointer" htmlFor={name}>
          {label && (
            <span className="ml-2 text-sm font-semibold text-blueGray-600">
              {label}
              {isRequired && <sup className="text-red-500 text-xs">*</sup>}
            </span>
          )}
        </label>
      </div>
      {errorMessage && (
        <span className="text-rose-500 text-xs">{errorMessage}</span>
      )}
    </div>
  )
);
export default Checkbox;
