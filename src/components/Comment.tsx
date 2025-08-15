import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { commentsTable } from "@/db/schema";
import { EllipsisVertical } from "lucide-react";

type Comment = typeof commentsTable.$inferSelect;

const Comment = ({ data }: { data: Comment }) => {
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
      <p className="text-gray-700">{data.comment}</p>
    </div>
  );
};

export default Comment;
