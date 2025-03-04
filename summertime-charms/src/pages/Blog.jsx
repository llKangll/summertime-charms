import React, { useState } from "react";
import { getPosts } from "../api/posts";

const Blog = () => {
  const [posts] = useState(getPosts());
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog">
      <h2>Consejos y Tips</h2>
      {selectedPost ? (
        <div className="post-detail">
          <h3>{selectedPost.title}</h3>
          <img src={selectedPost.image} alt={selectedPost.title} />
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)}>Volver</button>
        </div>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card" onClick={() => setSelectedPost(post)}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
