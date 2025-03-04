import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectCard({
  cardTitle,
  cardImageUrl,
  imgWidth,
  imgHeight,
  animatedUrl,
}: {
  cardTitle: string;
  cardImageUrl?: string;
  imgWidth?: number;
  imgHeight?: number;
  animatedUrl?: string;
}) {
  return (
    <Card className="group bg-slate-400 border-transparent w-72 h-56 hover:scale-110 transition-all duration-500 ease-in-out">
      <CardHeader>
        <CardTitle className="w-64">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        {cardImageUrl && (
          <>
            <Image
              src={cardImageUrl}
              alt={cardTitle}
              width={imgWidth}
              height={imgHeight}
              className="rounded-lg group-hover:hidden"
            />
            {animatedUrl && (
              <Image
                src={animatedUrl}
                alt={cardTitle}
                width={imgWidth}
                height={imgHeight}
                unoptimized
                className="rounded-lg group-hover:block hidden"
              />
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
