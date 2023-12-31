import { memo, FC, ReactNode } from "react";
import { Header } from "../organisms/layouts/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  console.log(children);
  return(
    <>
      <Header />
      {children}
    </>
  )
})