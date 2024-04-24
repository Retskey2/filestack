'use client'

import { X } from 'lucide-react'
import React, { FC, useState } from 'react'

interface IDetailed {
	setVisible: (value: boolean) => void
}

const Detailed: FC<IDetailed> = ({ setVisible }) => {
	return (
		<div className='text-[#000] px-8 border-l-2 border-l-gray-100'>
			<div className='flex flex-row justify-between items-center mt-6'>
				<div>Подробнее</div>
				<X
					className='cursor-pointer'
					onClick={() => setVisible(false)}
				/>
			</div>
		</div>
	)
}

export default Detailed
