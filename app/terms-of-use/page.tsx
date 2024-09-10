import { tos } from "@/resources/texts/terms_of_use"
import s from "./terms_of_use.module.sass"
export default function TermsOfUse() {
	return (
		<section className={s.tos}>
			<div className={s.hd_wrp}>
				<div className={s.hd_bg} />
				<div className={s.hd_grp}>
					<h1 className={s.hd}>Terms Of Use</h1>
					<p className={s.shd}>Last Updated: September 6th, 2024</p>
				</div>
			</div>
			<article className={s.body} dangerouslySetInnerHTML={{ __html: tos }} />
		</section>
	)
}
