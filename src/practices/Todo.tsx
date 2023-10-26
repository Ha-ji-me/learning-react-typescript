import axios from "axios";

type TodoType = {
  userId: number;
  title: string;
  //オプションprops。あってもなくても良い場合に必要。
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  //オプションpropsにはundefinedを返さないよう初期値を設定することが慣習。
  const { title, userId,completed = false } = props;
  const completedFlag = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completedFlag}${title}(ユーザーID:)${userId}`}</p>
    </div>
  )
}