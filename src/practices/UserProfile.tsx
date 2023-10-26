import { FC } from "react";
import { User } from "../types/user";

//そのままUserを利用しても良いが、使い回しを考慮してあらかじめひとまとめにする
type Props = {
  user: User;
}

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{ user.name }</dd>
      <dt>趣味</dt>
      {/* join: 配列の中身を引数で指定した文字列で区切りつつ、連結させるメソッド */}
      <dd>{ user.hobbies?.join(" / ") }</dd>
    </dl>
  )
}