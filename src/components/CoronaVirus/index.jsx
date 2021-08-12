import React, { useEffect, useState } from 'react'
import { Cards, CountryPicker } from './componentsCorona'
import { fetchData } from '../../api/fetch.api'
import styles from './Corona.module.css'
import { motion } from 'framer-motion'

function CoronaVirus() {
	const [data, setData] = useState({
		data: {},
		country: '',
	})

	useEffect(() => {
		const fetched = async () => {
			let data = await fetchData()
			setData(data)
			console.log(data)
		}
		fetched()
	}, [])

	const handleCountryChange = async (country) => {
		const responce = await fetchData(country)
		setData(responce, country)
		console.log(responce, country)
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.container}
		>
			<img
				className={styles.image}
				src={
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1weoQ3F9LD5U5V1yAyEBldhNKE5g0C7zjNn7ALWq6FRd7bNVpkSHbzQiuq1I0GxH4i33EruODg&usqp=CAU'
				}
				alt='COVID-19'
			/>
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
		</motion.div>
	)
}

export default CoronaVirus
