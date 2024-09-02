"use client"
import { useMediaQuery } from "react-responsive"
import s from "./home.module.sass"
import Sun from "@/public/icons/sun"
import HandToCoin from "@/public/icons/hand_to_coin"
import Renewable from "@/public/icons/renewable"
import Link from "next/link"
import ArrowUpRight from "@/public/icons/arrow_up_right"
import ChevDown from "@/public/icons/chev_down"
import { useState } from "react"
import learns from "@/resources/json/learns.json"
import ChevUp from "@/public/icons/chev_up"
import services from "@/resources/json/services.json"
import Pricing from "@/components/home_page/pricing"
export default function Home() {
	const media_lg = useMediaQuery({ query: "(min-width: 1000px)" })
	const [ShowBNF, setShowBNF] = useState(0)
	return (
		<section className={s.home}>
			<section className={s.mhero}>
				<div className={s.mh_top}>
					<h1 className={s.mh_hd}>
						Innovative solar solutions for a brighter future
					</h1>
					{media_lg ? (
						<p className={s.mh_shd}>
							Power your home and business with clean, renewable energy, with
							our cutting-edge solar technology
						</p>
					) : (
						<p className={s.mh_shd}>
							Join the solar revolution and power your future with clean,
							renewable energy.
						</p>
					)}
					{/* {media_lg && <div className={s.sep} />} */}
				</div>
				{!media_lg && (
					<div className={s.mh_btt}>
						<p className={s.mh_sbhd}>
							Power your home and business with clean, renewable energy, with
							our cutting-edge solar technology
						</p>
					</div>
				)}
			</section>

			<section className={s.sc}>
				<h5 className={s.sc_ttl}>Our Services</h5>
				<h2 className={s.sc_mttl}>
					Empower your life with sustainable energy solutions
					<div className={s.asep}></div>
				</h2>

				<div className={s.svc_cards}>
					{services.map((svc, idx) => (
						<div className={s.svc_card} key={idx}>
							<div className={s.svc_hd}>
								<span className={s.svc_enu}>{svc.index}</span>
								{svc.icon == "sun" ? (
									<Sun className={s.svc_ico} />
								) : svc.icon == "renewable" ? (
									<Renewable className={s.svc_ico} />
								) : (
									<HandToCoin className={s.svc_ico} />
								)}
							</div>
							<h4 className={s.svc_bhd}>{svc.title}</h4>
							<p className={s.svc_bd}>{svc.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className={s.benefits}>
				{/* <h5 className={s.sc_ttl}>Benefits</h5> */}
				<div className={s.bnf_bg}>
					<div className={s.bnf_ill}>
						<div className={s.bnf_img_wrp}>
							<img
								src="/images/panel_bg.jpg"
								alt="benefits"
								className={s.bnf_img}
							/>
							<div className={s.bnf_img_grad}></div>
						</div>
						<div className={s.bnf_ill_bd}>
							<h3 className={s.bnf_hd}>Learn About Solar Energy</h3>
							<div className={s.bnf_cta_wrp}>
								<Link href={"/blog"} className={s.bnf_cta}>
									<span>Blog</span>
									<span className={s.bnf_link}>
										<ArrowUpRight className={s.link_ico} />
									</span>
								</Link>
							</div>
						</div>
					</div>

					<div className={s.bnf_cards}>
						{learns.map((learn, idx) => (
							<div className={s.bnf_card} key={idx}>
								<div className={s.bnf_cd_hd}>
									<h5>{learn.title}</h5>
									<span
										className={s.bnf_cd_dpd}
										onClick={() => setShowBNF(ShowBNF == idx ? -1 : idx)}
									>
										{ShowBNF == idx ? (
											<ChevUp className={s.dpd_ico} />
										) : (
											<ChevDown className={s.dpd_ico} />
										)}
									</span>
								</div>
								<div
									className={s.bnf_cd_con}
									style={
										ShowBNF == idx
											? { gridTemplateRows: "1fr", padding: "1rem 0" }
											: {}
									}
								>
									<p className={s.bnf_cd_bd}>{learn.body}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Pricing />
		</section>
	)
}
