import { type FC } from "react";

interface MessageProps {
  messageText: string;
}

export const Message: FC<MessageProps> = ({ messageText }) => {
  return (
    <div>
      <h2>{messageText}</h2>
    </div>
  );
};
