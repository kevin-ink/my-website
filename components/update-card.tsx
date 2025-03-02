import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpdateProps } from "../app/types";
import { format } from "date-fns";
import Link from "next/link";

export default function UpdateCard({ update }: { update: UpdateProps }) {
  const { task, work_done, next_steps, repo_name, date, repo_url } = update;

  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <Card className="h-auto w-11/12 hover:scale-105 transition-all duration-500 ease-in-out">
      <CardHeader>
        <CardTitle className="text-2xl">{formattedDate}</CardTitle>
        <CardDescription>
          Key Repo:
          {repo_url ? (
            <Link href={repo_url}>
              <p className="hover:text-black inline">{` ${repo_name}`}</p>
            </Link>
          ) : (
            repo_name
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Task: <span className="text-slate-600">{task}</span>
        </p>
        <p>
          Work Done: <span className="text-slate-600">{work_done}</span>
        </p>
      </CardContent>
      <CardFooter>
        <p>
          Next Steps: <span className="text-slate-600">{next_steps}</span>
        </p>
      </CardFooter>
    </Card>
  );
}
