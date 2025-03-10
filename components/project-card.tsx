import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  cardTitle,
  cardImageUrl,
  imgWidth,
  imgHeight,
  animatedUrl,
  url,
}: {
  cardTitle: string;
  cardImageUrl?: string;
  imgWidth?: number;
  imgHeight?: number;
  animatedUrl?: string;
  url?: string;
}) {
  return (
    <Link href={url || "#"}>
      <Card className="group bg-slate-400 border-transparent w-72 h-56 hover:scale-110 transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="w-64">{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {cardImageUrl && (
            <>
              <Image
                src={cardImageUrl}
                alt={cardTitle}
                width={imgWidth}
                height={imgHeight}
                className="group-hover:hidden border-2 rounded-lg max-h-32"
              />
              {animatedUrl && (
                <Image
                  src={animatedUrl}
                  alt={cardTitle}
                  width={imgWidth}
                  height={imgHeight}
                  unoptimized
                  className="rounded-lg group-hover:block hidden border-2 max-h-32"
                />
              )}
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
