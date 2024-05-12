import { z } from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  username: z.string().min(2, { message: "Username is too short" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});

export const SigninValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});

export const postValidationSchema = z.object({
  caption: z.string().min(2).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
