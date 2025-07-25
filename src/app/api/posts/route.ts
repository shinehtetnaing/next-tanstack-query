import { PaginatedPosts, Post } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cursorParam = request.nextUrl.searchParams.get("cursor");
  const cursor = cursorParam ? parseInt(cursorParam) : undefined;

  const pageSize = 10;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const startIndex = cursor ? posts.findIndex((post) => post.id === cursor) : 0;
  const endIndex = startIndex + pageSize + 1;

  const result = posts.slice(startIndex, endIndex);

  const nextCursor = result.length > pageSize ? result[pageSize].id : undefined;

  const paginatedPosts: PaginatedPosts = {
    posts: result.slice(0, pageSize),
    nextCursor,
  };

  // return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });

  return NextResponse.json(paginatedPosts);
}
