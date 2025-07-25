import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild size="lg">
        <Link href="/posts">View Posts Demo</Link>
      </Button>
    </div>
  );
}
