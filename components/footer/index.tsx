import Link from "next/link"
import s from "./footer.module.sass"
import ArrowUpRight from "@/public/icons/arrow_up_right"
import Twitter from "@/public/icons/twitter"
import Mail from "@/public/icons/mail"
import Instagram from "@/public/icons/instagram"
import { useMediaQuery } from "react-responsive"

export default function Footer() {
	const media_md = useMediaQuery({ query: "(min-width: 800px)" })

	return (
		<footer className={s.footer}>
			{media_md ? (
				<div className={s.ft_wrp}>
					<div className={s.md_ft}>
						<div className={s.md_con}>
							<h1 className={s.md_con_hd}>Contact Us Now to Get Started</h1>
							<div className={s.md_con_cta_wrp}>
								<Link href={"/contact-us"} className={s.md_con_link}>
									<span className={s.con_bd}>Get Started</span>
									<span className={s.arr_ico_wrp}>
										<ArrowUpRight className={s.arr_ico} />
									</span>
								</Link>
							</div>
						</div>

						<div className={s.md_sep} />

						<div className={s.md_ft_con}>
							<div className={s.md_ft_lf}>
								<div className={s.md_ft_hdg}>
									<div className={s.md_logo_wrp}>
										<img
											src="/images/lg_logo.svg"
											alt="fl_logo"
											className={s.md_logo}
										/>
									</div>
									<p
										className={s.md_ft_bd}
									>{`At the forefront of the solar energy revolution, setting the pace with high quality products, cutting-edge features and real-time insights. Ecopulse pioneers the future of sustainable energy`}</p>
									<Link href={"/about-us"} className={s.md_hdg_cta}>
										<p>More about us</p> <span />
									</Link>
								</div>

								<div className={s.md_socials}>
									<span className={s.soc_ico_wrp}>
										<Mail className={s.soc_ico} />
									</span>
									<span className={s.soc_ico_wrp}>
										<Twitter className={s.soc_ico} />
									</span>
									<span className={s.soc_ico_wrp}>
										<Instagram className={s.soc_ico} />
									</span>
								</div>
							</div>

							<div className={s.md_ft_ri}>
								<div className={s.md_ft_menu}>
									<Link href={"/about-us"} className={s.menu_link}>
										About Us.
									</Link>
									<Link href={"/how-it-works"} className={s.menu_link}>
										How It Works.
									</Link>
									<Link href={"/products"} className={s.menu_link}>
										Products.
									</Link>
									<Link href={"/blog"} className={s.menu_link}>
										Blog.
									</Link>
								</div>

								<div className={s.md_sup_dets}>
									<div className={s.md_man_con}>
										<div className={s.md_con_det_grp}>
											<h5>Contact Us</h5>
											<p>+2348179917406</p>
											<p>hello@ecopulsetech.com</p>
										</div>
										<div className={s.md_con_det_grp}>
											<h5>Location</h5>
											<p>100001 Lagos, Nigeria</p>
											<p>52 Club Road, Yaba</p>
										</div>
									</div>
									<span className={s.copyright}>
										© 2024 — Ecopulse Technologies. All Rights Reserved.
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* <div></div> */}
				</div>
			) : (
				<div className={s.ft_wrp}>
					<div className={s.ft_top}>
						<span className={s.logo_wrp}>
							<img src="/images/logo_icon.svg" alt="logo" className={s.logo} />
						</span>
						<div className={s.con_link_wrp}>
							<Link href={"/contact-us"} className={s.con_link}>
								<span className={s.con_bd}>Contact Us</span>
								<span className={s.arr_ico_wrp}>
									<ArrowUpRight className={s.arr_ico} />
								</span>
							</Link>

							<div className={s.socials}>
								<span className={s.soc_ico_wrp}>
									<Mail className={s.soc_ico} />
								</span>
								<span className={s.soc_ico_wrp}>
									<Twitter className={s.soc_ico} />
								</span>
								<span className={s.soc_ico_wrp}>
									<Instagram className={s.soc_ico} />
								</span>
							</div>
						</div>
					</div>

					<div className={s.sep} />

					<div className={s.ft_mid}>
						<div className={s.ft_menu}>
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
						</div>

						<div className={s.con_dets}>
							<div className={s.con_det_grp}>
								<h5>Contact Us</h5>
								<p>+2348179917406</p>
								<p>hello@ecopulsetech.com</p>
							</div>
							<div className={s.con_det_grp}>
								<h5>Location</h5>
								<p>100001 Lagos, Nigeria</p>
								<p>52 Club Road, Yaba</p>
							</div>
						</div>
					</div>

					<div className={s.sep} />

					<div className={s.ft_btt}>
						<span className={s.ppol_grp}>
							<Link href={"/privacy-policy"} className={s.ppol_link}>
								Privacy Policy
							</Link>
							<Link href={"/terms-of-use"} className={s.ppol_link}>
								Terms of Use
							</Link>
						</span>

						<span className={s.copyright}>
							© 2024 — Ecopulse Technologies. All Rights Reserved.
						</span>
					</div>
				</div>
			)}
		</footer>
	)
}
