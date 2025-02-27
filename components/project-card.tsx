import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({
  cardTitle,
  cardImageUrl,
}: {
  cardTitle: string;
  cardImageUrl?: string;
}) {
  return (
    <Card className="bg-slate-400 border-transparent w-72 h-56 hover:w-80 hover:h-64 transition-all duration-500 ease-in-out">
      <CardHeader>
        <CardTitle className="w-64">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
