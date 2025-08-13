import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";

const Comment = () => {
  return (
    <div className="flex flex-col gap-y-5 rounded-md border p-4">
      <div className="flex w-full items-center">
        <Avatar className="mr-3">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="bg-black text-white">TU</AvatarFallback>
        </Avatar>
        <h3 className="flex-1 text-lg font-semibold">TanStack User</h3>
        <EllipsisVertical className="" />
      </div>
      <p className="text-gray-700">
        This is a sample comment. It can be longer than 100 characters, but it
        will be truncated if it exceeds that length.
      </p>
    </div>
  );
};

export default Comment;
