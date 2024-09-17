import { useRef, useState } from "react"
import s from "./pricing.module.sass"
import hasKey from "@/utils/has_key"
import plans from "@/resources/json/plans.json"
import Link from "next/link"
import ChevDown from "@/public/icons/chev_down"
import ChevUp from "@/public/icons/chev_up"
import { useMediaQuery } from "react-responsive"
import ChevLeft from "@/public/icons/chev_left"
import ChevRight from "@/public/icons/chev_right"
import Phone from "@/public/icons/phone"
import { useRouter } from "next/navigation"
export default function Pricing() {
	const [PlanMode, setPlanMode] = useState("residential")
	const [ActivePlan, setActivePlan] = useState(1)
	const [DPD, setDPD] = useState("-1")
	const media_lg = useMediaQuery({ query: "(min-width: 1000px)" })
	const scrollRef = useRef<any>()
	const router = useRouter()

	function scrollLeft() {
		scrollRef.current!.scrollBy(-120, 0)
	}
	function scrollRight() {
		scrollRef.current!.scrollBy(120, 0)
	}
	return (
		<section className={s.pricing} id={"plans"}>
			<h5 className={s.ttl}>Power Plans</h5>
			<h2 className={s.mttl}>
				Flexible Power Plans for Everyone
				<div className={s.asep}></div>
			</h2>
			<p className={s.sttl}>
				Compare our power plans to find the perfect match for your energy
				requirements.
			</p>

			<div
				className={s.mode_sel}
				onClick={() => {
					setPlanMode((prev) =>
						prev == "residential" ? "business" : "residential"
					)
				}}
			>
				<div className={s.curr_mode_ind} datatype={PlanMode} />
				<div className={s.mode_grp}>
					<span className={s.mode}>Residential</span>
					<span className={s.mode}>Business</span>
				</div>
			</div>

			<div className={s.plans_grid} ref={scrollRef}>
				{hasKey(plans, PlanMode) &&
					plans[PlanMode].map((plan, idx) => (
						<div
							className={s.pln}
							key={idx}
							style={ActivePlan == idx ? { border: "2px solid #FC9725" } : {}}
							datatype={PlanMode}
							onClick={() => {
								setActivePlan(idx)
							}}
						>
							<div className={s.pln_img_wrp}>
								<img src={plan.image} alt="pln_img" className={s.pln_img} />
							</div>
							<div className={s.pln_top}>
								<h5 className={s.pln_title}>{plan.title}</h5>
								<p className={s.pln_desc}>{plan.desc}</p>
							</div>
							<div className={s.pln_cta}>
								<h2 className={s.pln_price}>
									<i>₦</i>
									{plan.price}
								</h2>
							</div>
							<div className={s.pln_btt}>
								{plan.details.map((det, iidx) => (
									<div className={s.pln_det_grp} key={iidx}>
										<div className={s.cat}>
											<p className={s.pln_det_name}>{det.name}</p>
											{!(!media_lg && iidx == 0) &&
											!(media_lg && (iidx == 0 || iidx == 1)) ? (
												<span
													className={s.dpd_wrp}
													onClick={() => {
														setDPD((prev) =>
															prev == `${idx}${iidx}` ? "-1" : `${idx}${iidx}`
														)
													}}
												>
													{DPD == `${idx}${iidx}` ? (
														<ChevUp className={s.dpd_ico} />
													) : (
														<ChevDown className={s.dpd_ico} />
													)}
												</span>
											) : (
												<></>
											)}
										</div>
										<ul
											className={s.pln_det_list}
											style={
												DPD == `${idx}${iidx}` ||
												(!media_lg && iidx == 0) ||
												(media_lg && (iidx == 0 || iidx == 1))
													? { gridTemplateRows: "1fr", padding: "0.5rem 0 0" }
													: {}
											}
										>
											<div className={s.li_con}>
												{det.list.map((lis, iiidx) => {
													if (lis.startsWith("<")) {
														return (
															<li
																className={s.pln_det}
																key={iiidx}
																dangerouslySetInnerHTML={{ __html: lis }}
															></li>
														)
													} else {
														return (
															<li className={s.pln_det} key={iiidx}>
																{lis}
															</li>
														)
													}
												})}
											</div>
										</ul>
										<div className={s.pln_sep} />
									</div>
								))}
							</div>

							<div className={s.pln_buy}>
								<Link
									href={"/contact-us"}
									target={"_blank"}
									rel={"noopener noreferrer"}
									className={s.pln_btn}
									datatype={PlanMode}
								>
									Get Started
								</Link>
							</div>
						</div>
					))}
			</div>

			{!media_lg && (
				<div className={s.scr}>
					<div className={s.scr_wrp}>
						<span
							className={s.dir_wrp}
							onClick={() => {
								scrollLeft()
							}}
						>
							<ChevLeft className={s.dir_ico} />
						</span>
						<span
							className={s.dir_wrp}
							onClick={() => {
								scrollRight()
							}}
						>
							<ChevRight className={s.dir_ico} />
						</span>
					</div>
				</div>
			)}

			<div className={s.cus}>
				{/* <div className={s.cus_hd}>Custom</div> */}
				<p className={s.cus_bd}>
					{
						"If these plans don't fit, let's create one that suits. Customize your power plan for a perfect fit, bigger or smaller"
					}
				</p>
				<div className={s.cus_cta_wrp}>
					<button
						className={s.cus_cta}
						onClick={() => {
							router.push("/contact-us")
						}}
					>
						<span className={s.cus_cta_bd}>Book a Call</span>
						<span className={s.phone_ico_wrp}>
							<Phone className={s.phone_ico} />
						</span>
					</button>
				</div>
			</div>
		</section>
	)
}
