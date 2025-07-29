import { ReactNode } from "react";
import { z } from "zod/v4";
import { loginSchema, registerSchema } from "./zodSchema";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
