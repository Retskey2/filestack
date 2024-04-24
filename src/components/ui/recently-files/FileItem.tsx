import Image from 'next/image'
import React from 'react'

const FileItem = () => {
	return (
		<div className='w-full'>
			<div className='w-full h-52 bg-gray-200 rounded-t-lg px-6 overflow-hidden'>
				<div className='w-full h-full relative overflow-hidden inset-y-8'>
					<Image
						fill
						alt='file'
						src='/file_1.png'
						quality={100}
						sizes='(min-width: 808px) 50vw, 100vw'
						style={{
							objectFit: 'cover',
							backgroundPosition: '20%'
						}}
					/>
				</div>
			</div>
			<div className='mt-3'>
				<span className='font-bold'>Risen_Invoice#1.pdf</span>
				<div className='gap-2 flex flex-row text-black items-center opacity-35'>
					<span>Document </span>
					<div className='w-1 h-1 bg-[#000] rounded-md'></div>
					<span>9.7 MB</span>
				</div>
			</div>
		</div>
	)
}

export default FileItem
