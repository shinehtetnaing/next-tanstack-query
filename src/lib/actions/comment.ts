"use server";

import { commentsTable } from "@/db/schema";
import { db } from "@/index";
import { desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

type NewComment = typeof commentsTable.$inferInsert;

export async function createComment(comment: NewComment) {
  await db.insert(commentsTable).values(comment);

  revalidatePath("/comments");
}

export async function getComments() {
  return db.select().from(commentsTable).orderBy(desc(commentsTable.createdAt));
}
