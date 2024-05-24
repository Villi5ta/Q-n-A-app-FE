import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner/Spinner";

type ButtonProps = {
  onClicking?: () => void;
  isLoading: boolean;
  title: string;
  type?: "Warning" | "Regular";
  className?: string;
};

const Button = ({
  onClicking,
  isLoading,
  title,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.main} ${type === "Warning" && styles.warning} ${
        className && className
      }`}
      onClick={onClicking}
    >
      {isLoading ? <Spinner /> : <>{title}</>}
    </button>
  );
};

export default Button;
