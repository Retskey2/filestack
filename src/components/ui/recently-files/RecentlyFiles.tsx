import React from 'react'

import FileItem from './FileItem'

const RecentlyFiles = () => {
	return (
		<div>
			<span className='font-semibold'>Недавние файлы</span>
			<div className='flex flex-row grid-cols-3 justify-between mt-4 gap-4'>
				<FileItem />
				<FileItem />
				<FileItem />
			</div>
		</div>
	)
}

export default RecentlyFiles
