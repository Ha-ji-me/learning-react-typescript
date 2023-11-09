import { memo, FC, useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Input, ChakraProvider } from "@chakra-ui/react";

export const Login: FC = memo(() => {
  const pass: number = 9999;
  const [inputPass, setInputPass] = useState<number>(0);

  const onChangeInput = (event) => {
    const inputValue: number = parseFloat(event.target.value);
    setInputPass(inputValue);
  }

  const navigate = useNavigate();
  const onClickLogin = () => {
    if(inputPass === pass) {
      navigate("home");
    } else {
      alert('パスワードが違います');
    }
  }

  return (
    <>
      {/* <p>ログインページです</p>
      <input type="number" onChange={onChangeInput} />
      <br />
      <button onClick={onClickLogin}>ログイン</button> */}
      <ChakraProvider>
        <Flex style={{ width: "500px" }}>
          <Input placeholder='medium size' size='md' type="number" onChange={onChangeInput} />
          <Button colorScheme='teal' size='md' onClick={onClickLogin}>ログイン</Button>
        </Flex>
      </ChakraProvider>
    </>
  )
});