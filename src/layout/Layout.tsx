import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";

export const Layout = ({ children }: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<main className={`grid grid-cols-12 h-screen`}>
			{children}
			<Toaster />
		</main>
	)
}