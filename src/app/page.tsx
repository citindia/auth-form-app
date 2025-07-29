import LoginForm from "@/components/customui/LoginForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login | Auth Form App",
	description: "Login page of Auth Form App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Login (Auth App)
					</CardTitle>
				</CardHeader>
				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
