import { getComments } from "@/lib/actions/comment";
import Comment from "./Comment";

const CommentsList = async () => {
  const comments = await getComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentsList;
