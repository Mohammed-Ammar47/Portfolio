"use client";
import { sendEmail } from "@/app/_actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { type } from "os";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ContactFormSchema = z.object({
  fullName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("invalid email"),
  message: z
    .string()
    .min(6, { message: "message must be at least 6 characters" }),
});

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({ resolver: zodResolver(ContactFormSchema) });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);
    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="text-lg flex flex-col basis-1/2 gap-3 p-3 sm:p-5 w-full"
    >
      <div>
        <input
          className="p-3 rounded-lg w-full"
          placeholder="Full Name"
          {...register("fullName")}
        />
        {errors.fullName?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.fullName?.message}
          </p>
        )}
      </div>
      <div>
        <input
          className="p-3 rounded-lg w-full"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.fullName?.message}
          </p>
        )}{" "}
      </div>
      <textarea
        className="p-3 rounded-lg"
        cols={20}
        rows={5}
        placeholder="Message"
        {...register("message")}
      >
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.message?.message}
          </p>
        )}
      </textarea>
      <button
        className="ring-2 p-1.5 sm:p-3 rounded-lg  ring-[#0E7A80] dark:ring-[#31EBF5] focus:ring-offset-4 active:ring-offset-8 transition-all ease-in-out duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
