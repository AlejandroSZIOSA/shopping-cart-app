import { type FC, type ReactNode } from "react";

import styles from "./Message.module.css";

interface MessageProps {
  messageText: string;
  children?: ReactNode;
}

export const Message: FC<MessageProps> = ({ messageText, children }) => {
  return (
    <div className={styles.messageRootContainer}>
      <h2>{messageText}</h2>
      {children}
    </div>
  );
};
