import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UpdateCard() {
  const date = "10-2-2024";
  const topics = "React, TypeScript, TailwindCSS, Next.js";

  return (
    <Card className="h-auto w-11/12">
      <CardHeader>
        <CardTitle className="text-2xl">{date}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-col gap-y-2 items-start">
        <p>
          Topics: <span className="text-slate-500">{topics}</span>
        </p>
        <p>
          Repo: <span className="text-slate-500"></span>
        </p>
      </CardFooter>
    </Card>
  );
}
