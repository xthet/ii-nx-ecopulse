import Layout from "@/components/layout"
import "@/styles/globals.sass"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Ecopulse Technologies",
	description:
		"Join the solar revolution and power your future with clean, renewable energy.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
