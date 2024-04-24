import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import PinBlock from '@/components/ui/pin-block/PinBlock'
import RecentlyFiles from '@/components/ui/recently-files/RecentlyFiles'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

function Dashboard() {
	return (
		<div className='text-[#000] px-8'>
			<div className='flex flex-col mt-6 gap-6'>
				<RecentlyFiles />
				<PinBlock />
			</div>
		</div>
	)
}

export default Dashboard
