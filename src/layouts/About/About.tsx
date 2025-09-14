'use client'

import styles from './About.module.scss'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.about_me}>
				<span>About me</span>
				<motion.span
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: '100%', opacity: 1 }}
					transition={{
						type: 'spring',
						repeat: Infinity,
						repeatType: 'reverse',
						repeatDelay: 0.5,
					}}
					className={styles.border}
				/>
			</div>

			<div className={styles.texts}>
				<div className={styles.text}>
					<h3>A Passionate Software Developer/Designer</h3>
					<p>
						Hi! I&apos;m Ayush Narania, a software developer and designer with a passion for AI and Machine Learning. I love creating beautiful and functional applications, and I&apos;m always looking for new challenges to grow my skills.
					</p>
				</div>
				<div className={styles.text}>
					<h3>AI/ML Enthusiast</h3>
					<p>
						I am deeply interested in the field of Artificial Intelligence and Machine Learning. I am constantly exploring new algorithms and techniques to build intelligent systems that can solve real-world problems.
					</p>
				</div>
				<div className={styles.text}>
					<p>
						I pay attention to small details and make sure my work looks good
						and works smoothly. Whether I’m starting a project from scratch or
						improving an existing one, I stay dedicated to delivering
						high-quality results.
					</p>
				</div>
			</div>
		</section>
	)
}
