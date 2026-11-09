import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  phone: z.string().trim().max(20).optional(),
  service: z.string().trim().min(1, { message: "Please select a service" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // TODO: wire up your email provider (Resend, SendGrid, etc.) here.
    // For now we validate server-side and acknowledge the submission.
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      messageLength: data.message.length,
    });

    return {
      ok: true,
      message: "Thank you — we'll get back to you within one business day.",
    };
  });
