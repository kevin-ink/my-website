"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { postUpdate } from "../actions";
import { useState } from "react";
import { formSchema } from "../types";

export default function UpdateForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      next_steps: "",
      task: "",
      work_done: "",
      repo: "",
      repo_url: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    const error = await postUpdate(values);
    if (error) {
      console.log(error);
      form.setError("root", { type: "manual", message: "Failed to submit." });
    } else {
      alert("Submitted successfully!");
      form.reset();
    }
    setIsPending(false);
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <Card className="bg-slate-400 border-transparent w-full p-4">
          <h1 className="text-red-800">This form is for admin use only.</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task</FormLabel>
                    <FormControl>
                      <Textarea className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="work_done"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Done</FormLabel>
                    <FormControl>
                      <Textarea className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="next_steps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Next Steps</FormLabel>
                    <FormControl>
                      <Textarea className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repo Name</FormLabel>
                    <FormControl>
                      <Input className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repo_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repo URL</FormLabel>
                    <FormControl>
                      <Input className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="border-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isPending} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
