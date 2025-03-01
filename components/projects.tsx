import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <div className="h-auto mt-2 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12">
      <h1 className="text-3xl relative text-white" id="projects">
        featured projects
      </h1>
      <div className="w-full h-auto flex flex-row flex-wrap p-2 gap-4 justify-center">
        <ProjectCard
          cardTitle="3D Reaction Time Minigame"
          cardImageUrl="/urf.png"
          imgWidth={1869}
          imgHeight={939}
          animatedUrl={"/urf_demo.gif"}
        />
        <ProjectCard cardTitle="Digital Humanities Showcase Website" />
        <ProjectCard cardTitle="CoffeePls: a Platform for Coffee Enthusiasts" />
      </div>
      <p className="text-slate-300 text-center">
        Check out more of my projects over at my Github!
      </p>
    </div>
  );
}
