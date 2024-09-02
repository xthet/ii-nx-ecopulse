"use client"
import { ReactNode } from "react"
import Footer from "../footer"
import Navbar from "../navbar"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
