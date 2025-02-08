import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import authService from "../appwrite/auth";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          setUserId(user.$id);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (userId) {
          const userPosts = response.documents.filter(post => post.userId === userId);
          setPosts(userPosts);
        }
      } catch (error) {
        setError(error);
      }
    };

    if (userId) {
      fetchPosts();
    }
  }, [userId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full py-8">
      <Container>
        <h2 className="text-2xl font-bold pl-2 dark:text-white">My Posts</h2>

        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <div>No posts found for this user.</div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
