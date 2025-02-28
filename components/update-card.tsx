import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UpdateCard() {
  return (
    <Card className="h-auto w-11/12 hover:scale-105 transition-all duration-500 ease-in-out">
      <CardHeader>
        <CardTitle className="text-2xl"></CardTitle>
        <CardDescription>Key Repo: </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Task: <span className="text-slate-500"></span>
        </p>
        <p>
          Work Done: <span className="text-slate-500"></span>
        </p>
      </CardContent>
      <CardFooter>
        <p>
          Next Steps: <span className="text-slate-500"></span>
        </p>
      </CardFooter>
    </Card>
  );
}
