import CommentForm from "@/components/CommentForm";
import CommentsList from "@/components/CommentsList";

export default function CommentPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-center text-xl font-bold">Comments</h2>
      <CommentForm />
      <CommentsList />
    </section>
  );
}
