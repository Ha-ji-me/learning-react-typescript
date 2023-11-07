import { useEffect, useRef, useState } from "react";
import "./search.css";
import axios from "axios";
import { error } from "console";

export const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    }).then((error) => {
      console.log(error);
    })
  }, []);

  const onChangeInput = (event) => {
    const input = event.target.value;
    // console.log(ref.current.value);
    // console.log(input);

    //フィルタリング
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(input))
    setSearchQuery(filteredUsers);
    console.log(searchQuery);
  }

  return (
    <div className="Search">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" ref={ref} onChange={onChangeInput} />
        <div className="content">
          {searchQuery.map((user, key) => (
            <div className="box" key={key}>
            <h3>{user.name}</h3>
            <hr />
            <p>{user.email}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}