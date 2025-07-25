import type { Post } from "@/types";
import { Button } from "./ui/button";

const Post = ({ data }: { data: Post }) => {
  return (
    <div className="mb-4 space-y-3 rounded border p-4">
      <h2 className="text-xl font-bold">
        <span>({data.id})</span> {data.title}
      </h2>
      <p className="text-gray-700">
        {data.body.length > 100 ? `${data.body.slice(0, 100)}...` : data.body}
      </p>
      <Button className="mt-2">Read More</Button>
    </div>
  );
};

export default Post;
