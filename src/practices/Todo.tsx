import { TodoType } from "../types/todo";

export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId,completed = false } = props;
  const completedFlag = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completedFlag}${title}(ユーザーID:)${userId}`}</p>
    </div>
  )
}