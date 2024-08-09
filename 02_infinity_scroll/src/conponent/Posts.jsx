import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPost = async () => {

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();

      setData((prev) => [...prev,...data]);
    } catch (error) {
   
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
  
    if(innerHeight+scrollTop+1>=scrollHeight){
        setPage((prev)=>prev+1);
      } 
    
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className="text-center font-semibold text-[40px]">List of Posts</h1>
      <div className="container max-w-[90%] m-auto grid grid-cols-3 mt-2  gap-3 ">
        {data.map((post) => {
          return <PostCard key={post.id} id={post.id} title={post.body} />;
        })}
      </div>
    </>
  );
};

export default Posts;
