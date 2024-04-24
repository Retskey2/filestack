import React from 'react'

import PinBlockItem from './PinBlockItem'

const PinBlock = () => {
	return (
		<div>
			<span className='font-semibold'>Закреплённые папки</span>
			<div className='flex flex-row grid-cols-4 justify-between mt-4 gap-4'>
				<PinBlockItem />
				<PinBlockItem />
				<PinBlockItem />
				<PinBlockItem />
			</div>
		</div>
	)
}

export default PinBlock
