"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Post from "./Post";
import { Button } from "./ui/button";

const PostsList = () => {
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `http://localhost:3000/api/posts?${pageParam ? `cursor=${pageParam}` : ""}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      return response.json();
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts);
  // const posts = {};

  if (isPending) return <Loader2 className="mx-auto animate-spin" />;

  // if (isError)
  //   return (
  //     <div className="text-center text-red-500">
  //       <p>Error loading posts: {error.message}</p>
  //     </div>
  //   );

  return (
    <div className="space-y-4">
      {posts && posts.length > 0 && (
        <>
          <div className="space-y-3">
            {posts.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </div>

          <div className="my-4 flex justify-center">
            {hasNextPage && (
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2"
              >
                {isFetchingNextPage ? "Loading More ..." : "Load More"}
              </Button>
            )}
          </div>
        </>
      )}

      {!isError && !posts?.length && (
        <div className="text-center">No posts yet.</div>
      )}

      {isError && (
        <div className="text-center text-red-500">
          <p>Error loading posts: {error.message}</p>
        </div>
      )}
    </div>
  );
};

export default PostsList;
