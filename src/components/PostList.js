import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PostList(props) {
    const [posts,setPosts]=useState([])
useEffect(()=>{
    fetchPosts()
},[])
    const fetchPosts=async()=>{
        try{
            const url='https://jsonplaceholder.typicode.com/posts'
            const response= await axios.get(url)
            setPosts(response.data)
        }catch(err){ 
            console.log(err);
        }
    }
    const navigateToPostDetails=(postId)=>{
        props.history.push(`/posts/${postId}`)
    }
  return <div>
      {posts.map(post=>{
          return <p key={post.id} onClick={()=>{navigateToPostDetails(post.id)}}>{post.title}</p>
      })}
  </div>;
}

export default PostList;
