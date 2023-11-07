import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
import { Text } from './practices/Text';
import { UserProfile } from './practices/UserProfile';
import { User } from './types/user';
import { Test } from './practices/Test';
import { MainPractical } from './practicalComponents/MainPractical';
import { Todo } from './todos/Todo';
import { Es } from './es6/Es';
import { Search } from './search/Search';

function App() {
  // const user: User = {
  //   name: "ばろほ",
  //   hobbies: [
  //     "競馬",
  //     "プログラミング",
  //   ],
  // }
  return (
    <div className="App">
      <Search />
      {/* <MainPractical /> */}
      {/* <Todo /> */}
      {/* <Es /> */}
      {/* <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <MainTodo /> */}
      {/* <Text color="red" fontSize="18px" /> */}
      {/* <UserProfile user={user} />
      <Test /> */}
      {/* <MainTodo /> */}
    </div>
  );
}

export default App;
