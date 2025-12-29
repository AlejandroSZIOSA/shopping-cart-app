import { type FC, type ReactNode } from "react";

interface MessageProps {
  messageText: string;
  children?: ReactNode;
}

export const Message: FC<MessageProps> = ({ messageText, children }) => {
  return (
    <div>
      <h2>{messageText}</h2>
      {children}
    </div>
  );
};
