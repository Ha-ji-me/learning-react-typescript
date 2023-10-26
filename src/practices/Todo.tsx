import { TodoType } from "../types/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId,completed = false } = props;
  const completedFlag = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completedFlag}${title}(ユーザーID:)${userId}`}</p>
    </div>
  )
}