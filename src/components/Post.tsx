import { Button } from "./ui/button";

const Post = () => {
  return (
    <div className="mb-4 space-y-3 rounded border p-4">
      <h2 className="text-xl font-bold">Post Title</h2>
      <p className="text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        laboriosam reprehenderit ipsam totam delectus sit minus ut? Aperiam
        recusandae facere sapiente eaque ipsa omnis veniam, eius fugit eos,
        magni quis.
      </p>
      <Button className="mt-2">Read More</Button>
    </div>
  );
};

export default Post;
