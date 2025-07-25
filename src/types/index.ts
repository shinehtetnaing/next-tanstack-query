export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PaginatedPosts = {
  posts: Post[];
  nextCursor?: number;
};
