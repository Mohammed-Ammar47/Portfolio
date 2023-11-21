"use server";
import { ContactFormEmail } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { z } from "zod";
const FormDataSchema = z.object({
  fullName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),

  message: z
    .string()
    .min(6, { message: "message must be at least 6 characters" }),
});
const ContactFormSchema = z.object({
  fullName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z
    .string({
      required_error: "Name is required",
    })
    .email("invalid email"),
  message: z
    .string()
    .min(6, { message: "message must be at least 6 characters" }),
});
type Inputs = z.infer<typeof FormDataSchema>;

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);
  if (result.success) {
    const { fullName, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["mmedammar22@gmail.com"],
        subject: `Contact Form from ${fullName}`,
        text: `FullName: ${fullName}\nEmail:${email}`,
        react: ContactFormEmail({ fullName, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
