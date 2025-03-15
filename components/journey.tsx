"use client";
import UpdateCard from "@/components/update-card";
import { getUpdates } from "@/app/actions";
import { UpdateProps } from "@/app/types";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Journey() {
  const [updates, setUpdates] = useState<UpdateProps[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUpdates = async () => {
      const data = await getUpdates();
      setUpdates(data as UpdateProps[]);
    };
    fetchUpdates();
  }, []);

  return (
    <div className="h-screen mt-2 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12 mb-8">
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
        <Pagination className="text-black bg-slate-400 rounded w-fit p-1">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={`${
                  page !== 1
                    ? "hover:cursor-pointer"
                    : "text-black/25 hover:cursor-default hover:bg-transparent hover:text-black/25"
                }`}
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              />
            </PaginationItem>
            {[...Array(Math.ceil(updates.length / 3)).keys()].map((index) => {
              const pageNumber = index + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={page === pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className="hover:cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                className={`${
                  page < Math.ceil(updates.length / 3)
                    ? "hover:cursor-pointer"
                    : "text-black/25 hover:cursor-default hover:bg-transparent hover:text-black/25"
                }`}
                onClick={() => {
                  if (page < Math.ceil(updates.length / 3)) {
                    setPage(page + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {updates.slice((page - 1) * 3, page * 3).map((update) => (
          <div key={update.id} className="w-full">
            <UpdateCard update={update as UpdateProps} />
          </div>
        ))}
      </div>
    </div>
  );
}
