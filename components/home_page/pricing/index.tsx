import { useState } from "react"
import s from "./pricing.module.sass"
import hasKey from "@/utils/has_key"
import plans from "@/resources/json/plans.json"
import Link from "next/link"
import ChevDown from "@/public/icons/chev_down"
export default function Pricing() {
	const [PlanMode, setPlanMode] = useState("residential")
	const [ActivePlan, setActivePlan] = useState(1)
	return (
		<section className={s.pricing}>
			<h5 className={s.ttl}>Product Plans</h5>
			<h2 className={s.mttl}>
				Flexible Solar Energy Plans for Everyone
				<div className={s.asep}></div>
			</h2>
			<p className={s.sttl}>
				Compare our product plans to find the perfect match for your energy
				requirements.
			</p>

			<div className={s.mode_sel}>
				<div className={s.curr_mode_ind} />
				<div className={s.mode_grp}>
					<span className={s.mode}>Residential</span>
					<span className={s.mode}>Business</span>
				</div>
			</div>

			<div className={s.plans_grid}>
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
								{/* <Link
									href={plan.buy_link}
									target={"_blank"}
									rel={"noopener noreferrer"}
									className={s.pln_btn}
									datatype={PlanMode}
								>
									Buy Now
								</Link> */}
							</div>
							<div className={s.pln_btt}>
								{plan.details.map((det, iidx) => (
									<div className={s.pln_det_grp} key={iidx}>
										<div className={s.cat}>
											<p className={s.pln_det_name}>{det.name}</p>
											<ChevDown className={s.dpd_ico} />
										</div>
										<ul className={s.pln_det_list}>
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
										</ul>
										<div className={s.pln_sep} />
									</div>
								))}
							</div>
						</div>
					))}
			</div>
		</section>
	)
}
