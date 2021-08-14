import React from 'react'
import { Link } from 'react-router-dom'
import weatherImage from '../../img/sun.png'
import corona from '../../img/virus.png'
import { motion } from 'framer-motion'
import '../../App.css'
import Particles from 'react-tsparticles'

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
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='homepage__bg'
			>
				<Particles
					style={{ maxWidth: '90vw', marginRight: '-30px' }}
					params={{
						particles: {
							number: {
								value: 160,
								density: {
									enable: true,
									value_area: 800,
								},
							},
							color: {
								value: '#ffffff',
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 0,
									color: '#000000',
								},
								polygon: {
									nb_sides: 5,
								},
								image: {
									src: 'img/github.svg',
									width: 100,
									height: 100,
								},
							},
							opacity: {
								value: 1,
								random: true,
								anim: {
									enable: true,
									speed: 1,
									opacity_min: 0,
									sync: false,
								},
							},
							size: {
								value: 2.5,
								random: true,
								anim: {
									enable: false,
									speed: 4,
									size_min: 0.3,
									sync: false,
								},
							},
							line_linked: {
								enable: false,
								distance: 150,
								color: '#ffffff',
								opacity: 0.4,
								width: 1,
							},
							move: {
								enable: true,
								speed: 1,
								direction: 'none',
								random: true,
								straight: false,
								out_mode: 'out',
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 600,
								},
							},
						},
						interactivity: {
							detect_on: 'canvas',
							events: {
								onhover: {
									enable: true,
									mode: 'bubble',
								},
								onclick: {
									enable: true,
									mode: 'repulse',
								},
								resize: true,
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 250,
									size: 0,
									duration: 2,
									opacity: 0,
									speed: 3,
								},
								repulse: {
									distance: 400,
									duration: 0.4,
								},
								push: {
									particles_nb: 4,
								},
								remove: {
									particles_nb: 2,
								},
							},
						},
						retina_detect: true,
					}}
				/>
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
		</div>
	)
}

export default Home
