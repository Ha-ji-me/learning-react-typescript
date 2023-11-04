import { BrowserRouter } from "react-router-dom";

import theme from "../theme/theme";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Login } from "./pages/Login";
import { Setting } from "./pages/Setting";
import { UserManagement } from "./pages/UserManagement";
import { PracticalRouter } from "../router/PracticalRouter";

export const MainPractical = () => {
  return (
    // <ChakraProvider theme={theme}>
    //   <Button colorScheme="teal">ボタン</Button>
    //   <p>あああああああああ</p>
    // </ChakraProvider>
    <div>
      {/* <Login />
      <Setting />
      <UserManagement /> */}
      <BrowserRouter>
        <PracticalRouter />
      </BrowserRouter>
    </div>
  )
}