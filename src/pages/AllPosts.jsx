import { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  console.log("Fetched posts:", posts);

  return (
    <div className="w-full py-8">
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => {
              <div key={post.$id} className="py-2 w-1/4">
                <PostCard {...post} />
              </div>;
            })}
          </div>
        </Container>
      )}
    </div>
  );
}

export default AllPosts;
