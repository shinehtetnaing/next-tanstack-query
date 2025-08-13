"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  comment: z.string().min(1, { error: "Comment is required" }).max(100, {
    message: "Comment must not be longer than 100 characters.",
  }),
});

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-start space-x-6"
      >
        <Avatar className="size-14">
          <AvatarImage src="" alt="" />
          <AvatarFallback className="bg-black text-xl text-white">
            TU
          </AvatarFallback>
        </Avatar>

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  placeholder="Enter your comment"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
