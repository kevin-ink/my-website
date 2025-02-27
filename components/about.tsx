import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="h-auto mt-2 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12">
      <h1 className="text-3xl relative text-white">about me</h1>
      <div className="flex flex-row flex-wrap p-2 gap-x-4 justify-center">
        <Avatar className="w-60 h-60 my-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-slate-300 text-wrap flex-1 transition-all duration-300 ease-in-out">
          Hi, I'm Kevin—a recent University of California graduate (Aug 2024)
          with a skillset in software development and a commitment to continuous
          learning. I'm actively seeking an entry-level role where I can
          contribute my skills, innovate, and grow as a developer. Every day, I
          challenge myself by exploring new technologies and refining my craft
          through hands-on projects, which I document on my journey below. My
          experience as a Student Supervisor for the University's Unified Access
          Services honed my problem-solving, communication, and leadership
          abilities in dynamic environments. I'm excited to bring my technical
          expertise and enthusiasm for learning to a forward-thinking team.
        </p>
      </div>
    </div>
  );
}
