import React, { useEffect, useState } from 'react'

import { Cards, CountryPicker } from './componentsCorona'
import { fetchData } from '../../api/fetch.api'
import styles from './Corona.module.css'

import image from '../../img/image.png'

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
		<div className={styles.container}>
			<img className={styles.image} src={image} alt='COVID-19' />
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
		</div>
	)
}

export default CoronaVirus
