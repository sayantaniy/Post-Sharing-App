import React, { useState, useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
        //sample
      _id: 1,
      caption: "Hello World",
      image:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=880&q=80",
    },
  ]);

  useEffect(()=>{

    axios.get('http://localhost:3000/posts')
    .then((response)=>{
      console.log(response.data)
      setPosts(response.data.posts)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center px-4 py-6">
      <div className="w-full max-w-md space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-auto object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-zinc-200">{post.caption}</p>

                {/* Actions (optional, aesthetic) */}
                <div className="flex gap-4 mt-3 text-zinc-400 text-sm">
                  <button className="hover:text-red-400 transition">
                    ♥ Like
                  </button>
                  <button className="hover:text-blue-400 transition">
                    💬 Comment
                  </button>
                  <button className="hover:text-green-400 transition">
                    ↗ Share
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-zinc-400">No posts yet</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
