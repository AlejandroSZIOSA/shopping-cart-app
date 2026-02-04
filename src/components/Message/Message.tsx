import type { FC, ReactNode } from "react";
import styles from "./Message.module.css";

interface MessageProps {
  messageText: string;
  variant: "info" | "error" | "success" | "loading" | "error-form-fields";
  children?: ReactNode;
}

export const Message: FC<MessageProps> = ({
  messageText,
  variant,
  children,
}) => {
  return (
    <div className={`${styles.messageRootContainer} ${styles[variant]}`}>
      <h2>{messageText}</h2>
      {children}
    </div>
  );
};
