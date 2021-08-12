import React from 'react'
import { Link } from 'react-router-dom'
import weatherImage from '../../img/weather-icon2.png'
import corona from '../../img/corona-icon.png'
import { motion } from 'framer-motion'
import '../../assets/styles-adaptive.css/home.css'
import '../../App.css'

function Home() {
	const fadeLeft = {
		hidden: { opacity: 0, x: -300 },
		visible: { opacity: 1, x: 0 },
	}
	const fadeRight = {
		hidden: { opacity: 0, x: 300 },
		visible: { opacity: 1, x: 0 },
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='homepage__bg'
		>
			<div className='route__form'>
				<Link to={'/weather'}>
					<motion.img
						src={weatherImage}
						className='weather-logo'
						alt=''
						variants={fadeRight}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					/>
				</Link>
				<Link to={'/corona'}>
					<motion.img
						className='corona-logo'
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
						src={corona}
						alt=''
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.1 }}
					/>
				</Link>
			</div>
		</motion.div>
	)
}

export default Home
