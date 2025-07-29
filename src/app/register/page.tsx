import RegisterForm from "@/components/customui/RegisterForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Register | Auth Form App",
	description: "Register page of Auth Form App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Register (Auth App)
					</CardTitle>
				</CardHeader>
				<CardContent>
					<RegisterForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
