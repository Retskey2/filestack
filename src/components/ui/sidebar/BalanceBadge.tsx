import React from 'react'

const BalanceBadge = () => {
	return (
		<div className='p-3'>
			<div className='bg-[#4152EE] rounded-xl p-4 text-xs'>
				<div className='flex flex-col'>
					<span>Хранилище</span>
					<div>
						85,29 GB <span className='opacity-50'>/ 128 GB</span>
					</div>
					<button className='mt-4 bg-[#7AF33D] p-2 rounded-lg text-[#000]'>
						Beli Penyman
					</button>
				</div>
			</div>
		</div>
	)
}

export default BalanceBadge
