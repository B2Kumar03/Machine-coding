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
      }  //if user scrolls to the bottom of the page, it will fetch more posts.  //you can adjust the condition as per your requirement.  //this is just a simple example. You can also add error handling to this function.  //also, you may want to debounce this function to prevent unnecessary API calls.  //you can use lodash.debounce function for this.  //https://lodash.com/docs/4.17.15#debounce  //this example uses the window.addEventListener method to listen for scroll events. You can also use Intersection Observer API if you want to use native browser features.  //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API  //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView  //https://developer.mozilla.
    
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
