import * as z from "zod";
export const registerSchema = z.object({
  username: z
    .string()
    .min(3, {
      message:
        "User name required & you have to provide 3 characters long user name",
    })
    .max(50),
  fullname: z.string().min(2, { message: "Full name required" }),
  email: z.string().email({ message: "Must be provide a valid email" }),
  password: z
    .string()
    .min(4, { message: "Your password must be 4 characters long" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Must be provide a valid email" }),
  password: z
    .string()
    .min(4, { message: "Your password must be 4 characters long" }),
});
