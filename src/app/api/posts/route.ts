import { PaginatedPosts } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cursorParam = request.nextUrl.searchParams.get("cursor");
  const cursor = cursorParam ? parseInt(cursorParam) : undefined;

  const pageSize = 10;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const nextCursor = posts.length > pageSize ? posts[pageSize].id : undefined;

  const paginatedPosts: PaginatedPosts = {
    posts: posts.slice(0, pageSize),
    nextCursor,
  };

  return NextResponse.json(paginatedPosts);
}
