"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import styles from "./index.module.css";

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  onChange?: (value: string) => void;
}

export function Input({ onChange, ...props }: Props) {
  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );
  return (
    <input
      {...props}
      className={`${styles.input} ${props.className}`}
      onChange={handleOnChange}
    />
  );
}
