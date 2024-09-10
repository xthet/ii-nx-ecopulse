import s from "./privacy_policy.module.sass"
import { priva_pol } from "@/resources/texts/privacy_policy"
export default function PrivacyPolicy() {
	return (
		<section className={s.pri_pol}>
			<div className={s.hd_wrp}>
				<div className={s.hd_bg} />
				<div className={s.hd_grp}>
					<h1 className={s.hd}>Privacy Policy</h1>
					<p className={s.shd}>Last Updated: September 6th, 2024</p>
				</div>
			</div>
			<article
				className={s.body}
				dangerouslySetInnerHTML={{ __html: priva_pol }}
			/>
		</section>
	)
}
