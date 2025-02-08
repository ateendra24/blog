import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center min-h-[70vh] dark:text-white">

  //       <Container>
  //         <div className="flex flex-wrap">
  //           <div className="p-2 w-full">
  //             <h1 className="text-2xl font-bol">

  //               <Link
  //                 to="/login"
  //                 className="font-medium text-primary transition-all duration-200 underline"
  //               >
  //                 Signin 
  //               </Link>
  //               &nbsp;
  //               to read posts
  //             </h1>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }
  return (
    <div className="w-full py-8">
      <Container>
        <h2 className="text-2xl font-bold pl-2 dark:text-white">All Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
