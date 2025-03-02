"use server";

import UpdateCard from "@/components/update-card";
import { getUpdates } from "@/app/actions";
import { UpdateProps } from "@/app/types";
export const revalidate = 60;

export default async function Journey() {
  const updates = await getUpdates();

  return (
    <div className="h-auto mt-2 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl relative text-white" id="journey">
          my journey
        </h1>
      </div>
      <p className="text-slate-300 my-2">
        My daily updates on the projects and skills I&apos;ve been refining
        until I land my entry role.
      </p>
      <div className="flex flex-col gap-y-2 items-center">
        {updates.map((update) => (
          <div key={update.id} className="w-full">
            <UpdateCard update={update as UpdateProps} />
          </div>
        ))}
      </div>
      <div className="h-[80vh]"></div>
    </div>
  );
}
