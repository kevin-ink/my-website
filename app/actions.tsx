"use server";

import { neon } from "@neondatabase/serverless";
import { formSchema } from "./types";
import { z } from "zod";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in the environment variables.");
}

const sql = neon(DATABASE_URL);
async function init() {
  await sql`SET TIMEZONE = 'America/Los_Angeles'`;
}

init();

export async function postUpdate(values: z.infer<typeof formSchema>) {
  const { task, next_steps, repo, repo_url, work_done, password } = values;

  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Failed to insert update." };
  }

  try {
    await sql`
        INSERT INTO updates (task, next_steps, repo_name, repo_url, work_done)
        VALUES (${task}, ${next_steps}, ${repo}, ${repo_url}, ${work_done})
    `;
  } catch (error) {
    console.error("Error inserting update:", error);
    return { error: "Failed to insert update." };
  }
}

export async function getUpdates() {
  const updates = await sql`
        SELECT * FROM updates
        ORDER BY date DESC
        LIMIT 5
    `;
  return updates;
}
