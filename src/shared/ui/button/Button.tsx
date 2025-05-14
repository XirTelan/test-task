import styles from "./Buttom.module.scss";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {label}
    </button>
  );
}
