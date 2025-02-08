import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-ful rounded-xl">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full aspect-[16/9] object-cover"
          />
        </div>
        <h2 className="text-l font-bold text-black line-clamp-2 dark:text-white">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
