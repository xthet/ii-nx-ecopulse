import Layout from "@/components/layout"
import "@/styles/globals.sass"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"

export const metadata: Metadata = {
	title: "Ecopulse Technologies",
	description:
		"Join the solar revolution and power your future with clean, renewable energy.",
}

const outfit = Outfit({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-otf",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${outfit.variable}`}>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
