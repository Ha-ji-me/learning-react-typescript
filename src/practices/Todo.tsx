import { TodoType } from "../types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId,completed = false } = props;
  const completedFlag = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completedFlag}${title}(ユーザーID:)${userId}`}</p>
    </div>
  )
}