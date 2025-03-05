import { z } from "zod";

export interface UpdateProps {
  id: string;
  task: string;
  date: Date | string;
  work_done: string;
  next_steps: string;
  repo_name: string;
  repo_url: string;
}

export const formSchema = z
  .object({
    task: z.string().min(3).max(500),
    next_steps: z.string().min(3).max(500),
    repo: z.string().max(50),
    repo_url: z.string().max(2048),
    work_done: z.string().min(3).max(500),
    password: z.string().min(8).max(100),
  })
  .refine(
    (data) =>
      (data.repo === "" && data.repo_url === "") ||
      (data.repo !== "" && data.repo_url !== ""),
    {
      message: "Both repo and repo URL must be filled or both must be empty",
      path: ["repo_url"],
    }
  );
