import { useState, useEffect } from "react";
import axios from "axios";

export const Post = () => {
  const url = "http://localhost:8000/posts";
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
          // console.log(res.data);
          setPosts(res.data);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  // const onClickEdit = () => {
  //   alert('ss')
  // }

  return (
    <>
      {posts.map((post, key) => (
        <div key={key}
            style={{
              margin:"40px",
              border:"1px solid #2223",
              borderRadius:"5px",
              paddingLeft:"30px"
            }}
        >
          <p>no. {post.id}</p>
          <p>name: {post.user.name}</p>
          <p>title: {post.title}</p>
          <p>content: {post.content}</p>
          {/* <button onClick={onClickEdit}>edit</button> */}
        </div>
      ))}
    </>
  )
}