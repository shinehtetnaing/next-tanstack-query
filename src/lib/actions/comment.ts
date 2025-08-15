"use server";

import { commentsTable } from "@/db/schema";
import { db } from "@/index";
import { revalidatePath } from "next/cache";

type NewComment = typeof commentsTable.$inferInsert;

export async function createComment(comment: NewComment) {
  await db.insert(commentsTable).values(comment);

  revalidatePath("/comments");
}
