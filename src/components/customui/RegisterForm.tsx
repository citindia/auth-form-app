"use client";

import { registerAtom } from "@/lib/atoms";
import { RegisterType } from "@/lib/types";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { Loader, UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";

const RegisterForm = () => {
	const setRegister = useSetAtom(registerAtom);

	const { push } = useRouter();

	const registerForm = useForm<RegisterType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		mode: "all",
	});

	const handleRegister = async (register: RegisterType) => {
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setRegister(register);

		toast.success("Registered successfully!");

		registerForm.reset();

		push("/");
	};

	return (
		<Form {...registerForm}>
			<form
				onSubmit={registerForm.handleSubmit(handleRegister)}
				className="grid gap-4">
				<FormField
					control={registerForm.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Enter your name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={registerForm.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="Enter your email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={registerForm.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter your password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="cursor-pointer"
					disabled={registerForm.formState.isSubmitting}>
					{registerForm.formState.isSubmitting ? (
						<>
							<Loader className="animate-spin" /> Submitting
						</>
					) : (
						<>
							<UserRoundPlus /> Register
						</>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
