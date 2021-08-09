import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import weatherImage from '../../img/weather-icon2.png'
import corona from '../../img/corona-icon.png'
import { motion } from 'framer-motion'

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
		<div className='homepage__bg'>
			<div className='route__form'>
				<Link to={'/weather'}>
					<motion.img
						src={weatherImage}
						alt=''
						variants={fadeRight}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						drag={true}
						draggable={true}
					/>
				</Link>
				<Link to={'/corona'}>
					<motion.img
						className='corona'
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
						src={corona}
						alt=''
						whileTap={{ scale: 0.9 }}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Home
