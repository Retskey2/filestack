import { Folder } from 'lucide-react'
import React from 'react'

const PinBlockItem = () => {
	return (
		<div className='bg-[#F9F9FF] border-[#F4F4FF] border-2 rounded-full w-full p-1 flex flex-row items-center gap-4'>
			<div className='rounded-full w-14 h-14 bg-white flex justify-center items-center border-[#F4F4FF] border-2'>
				<Folder color='#2436EC' />
			</div>

			<div className='flex flex-col justify-center items-start '>
				<div className='font-bold'>Download</div>
				<div className='opacity-55'>4 file</div>
			</div>
		</div>
	)
}

export default PinBlockItem
