import { useEffect, useState } from "react";

// Revise axios fetch and then, catch


// Custom hook to fetch posts
function usePosts() {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      setPost(data);
    }

    fetchPosts();
  }, []);

  return post;
}

export default function Hook1() {
    
  const post = usePosts();

  return (
    <div>
      {/* {JSON.stringify(post)} */}
      {post.title}
    </div>
  );
}
