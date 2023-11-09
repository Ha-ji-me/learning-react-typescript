import axios from "axios";
import { FC, useState, useEffect } from "react";

export const LaraTest:FC = () => {
  // const url: string = 'http://localhost:8000/posts';
  // const [posts, setPosts] = useState<any>([]);
  // axios.get(url).then((res) => {
  //   setPosts(res);
  //   console.log(posts);
  // })

  const url = "http://localhost:8000/posts";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
          console.log(res);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  return (
    <div>
    </div>
  )
}