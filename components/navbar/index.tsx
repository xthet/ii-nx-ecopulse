"use client"
import Link from "next/link"
import s from "./navbar.module.sass"
import { useScroll } from "@/hooks/useScroll"
import Bars from "@/public/icons/bars"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"

export default function Navbar() {
	const { scrollY } = useScroll()
	const media_lg = useMediaQuery({ query: "(min-width: 1000px)" })
	const [ShowDropDown, setShowDropDown] = useState(false)

	return (
		<nav className={s.nav}>
			<div
				className={`${s.nav_wrp} ${
					scrollY <= 15 && !ShowDropDown ? s.no_bg : ""
				}`}
				datatype={ShowDropDown ? "dpd_active" : ""}
			>
				<div className={s.mob_nav}>
					<Link href={"/"} className={s.home_link}>
						<img
							src={media_lg ? "/images/lg_logo.svg" : "/images/logo_icon.svg"}
							alt={"logo"}
							className={s.logo}
						/>
					</Link>
					{media_lg && (
						<span className={s.menu}>
							<Link href={"/about-us"} className={s.menu_link}>
								About Us
							</Link>
							<Link href={"/how-it-works"} className={s.menu_link}>
								How It Works
							</Link>
							<Link href={"/products"} className={s.menu_link}>
								Products
							</Link>
							<Link href={"/blog"} className={s.menu_link}>
								Blog
							</Link>
							<Link href={"/contact-us"} className={s.contact_btn}>
								Contact Us
							</Link>
						</span>
					)}
					{!media_lg && (
						<span
							className={s.nav_cta}
							onClick={() => {
								setShowDropDown((prev) => !prev)
							}}
						>
							<Bars className={s.ham_ico} />
						</span>
					)}
				</div>
				<div
					className={s.drop_down}
					style={
						ShowDropDown ? { gridTemplateRows: "1fr", padding: "1rem 0" } : {}
					}
				>
					<div className={s.mob_menu}>
						<Link href={"/about-us"} className={s.menu_link}>
							About Us
						</Link>
						<Link href={"/how-it-works"} className={s.menu_link}>
							How It Works
						</Link>
						<Link href={"/products"} className={s.menu_link}>
							Products
						</Link>
						<Link href={"/blog"} className={s.menu_link}>
							Blog
						</Link>
						<Link href={"/contact-us"} className={s.menu_link}>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
