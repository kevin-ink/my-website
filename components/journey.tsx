import UpdateCard from "@/components/update-card";
import UpdateForm from "@/components/update-form";

export default function Journey() {
  return (
    <div className="h-auto mt-2 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl relative text-white">my journey</h1>
        <UpdateForm />
      </div>
      <p className="text-slate-300 my-2">
        My daily updates on the projects and skills I've been refining until I
        land my entry role.
      </p>
      <div className="flex flex-col gap-y-2 items-center">
        <UpdateCard />
      </div>
      <div className="h-[50vh]"></div>
    </div>
  );
}
