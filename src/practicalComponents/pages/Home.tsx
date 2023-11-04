import { memo, FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = memo(() => {
  return (
    <div>
      <p>Homeページです</p>
      {/* 注意！！linkタグで/をつけると階層パスを作ることができなくなってしまう！ */}
      <Link to="setting">設定ページへ</Link>
      <br />
      <Link to="user-management">ユーザー管理ページへ</Link>
    </div>
  )
})