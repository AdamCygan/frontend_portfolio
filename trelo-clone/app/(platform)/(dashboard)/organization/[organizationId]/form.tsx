"use client";

import { createBoard } from "@/actions/create-board";

import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";
import { title } from "process";
import { FormSubmit } from "@/components/form/form-submit";
import { Chicle } from "next/font/google";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" label="Board Title" errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};