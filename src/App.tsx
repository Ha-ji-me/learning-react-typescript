import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
import { MainTodo } from './practices/MainTodo';
import { Text } from './practices/Text';
import { UserProfile } from './practices/UserProfile';
import { User } from './types/user';
import { Test } from './practices/Test';

function App() {
  const user: User = {
    name: "ばろほ",
    hobbies: [
      "競馬",
      "プログラミング",
    ],
  }
  return (
    <div className="App">
      {/* <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <MainTodo /> */}
      {/* <Text color="red" fontSize="18px" /> */}
      <UserProfile user={user} />
      <Test />
    </div>
  );
}

export default App;
