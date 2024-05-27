import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner/Spinner";

type ButtonProps = {
  onClicking?: () => void;
  isLoading: boolean;
  title: string;
  type?: "Warning" | "Regular" | "Like";
  className?: string;
};

const Button = ({
  onClicking,
  isLoading,
  title,
  type,
  className,
}: ButtonProps) => {
  const getButtonClasses = () => {
    let buttonClasses = styles.main;
    if (type === "Warning") buttonClasses += ` ${styles.warning}`;
    if (type === "Like") buttonClasses += ` ${styles.like}`;
    if (className) buttonClasses += ` ${className}`;
    return buttonClasses;
  };

  return (
    <button className={getButtonClasses()} onClick={onClicking}>
      {isLoading ? <Spinner /> : title}
    </button>
  );
};

export default Button;
