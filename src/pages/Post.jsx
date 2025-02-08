import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state variable
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true initially

    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          setIsLoading(false); // Set isLoading to false when post is fetched
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return isLoading ? (
    <div className="my-10 flex justify-center">Loading...</div> // Render a loading state while isLoading is true
  ) : post ? (
    <div className="py-6 max-w-4xl mx-auto">
      <Container>
        <div className="w-full mb-6">
          <h1 className="text-lg sm:text-lg lg:text-3xl font-black text-black dark:text-white">{post.title}</h1>
        </div>
        <div className="w-full flex justify-center mb-1 relative">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full aspect-auto"
          />

          {isAuthor && (
            <div className="absolute right-2 top-2">
              <Link to={`/edit-post/${post?.$id}`}>
                <Button className="bg-white text-black px-2 py-2 rounded-lg mr-3 text-xs md:text-sm">
                  Edit
                </Button>
              </Link>
              <Button className="bg-white text-black px-2 py-2 rounded-lg text-xs md:text-sm" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        <p className="text-[#656565] font-light text-sm mb-4 dark:text-[#c3c3c3]">Wriiten By: <span> {userData?.name} </span></p>

        <div className="browser-css dark:text-white CONTENT">{parse(post?.content)}</div>
      </Container>
    </div>
  ) : null;
}
