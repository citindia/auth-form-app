import { z } from "zod/v4";

export const loginSchema = z.object({
	email: z.email({ error: "Invalid email" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" }),
});

export const registerSchema = z.object({
	name: z.string().min(2, { error: "Name must be at least 2 characters" }),
	email: z.email({ error: "Invalid email" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" }),
});
