import axios from "axios";
import { FC, useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer'
import { Post } from "./Post";
import PostCard from "./PostCard";

export const LaraTest:FC = () => {
  return (
    <div>
      <Header />
      <Post />
      {/* <PostCard /> */}
      <Footer />
    </div>
  )
}