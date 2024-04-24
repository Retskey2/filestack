import { Bell, SearchIcon, Settings } from 'lucide-react'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export function Header() {
	return (
		<header className='h-28 flex flex-row items-center justify-between px-8 border-b-gray-100 border-b-2'>
			<div className='bg-[#F4F5FF] max-w-[40%] flex flex-row pl-4 py-1 flex-1 rounded-lg gap-2 items-center justify-center'>
				<SearchIcon
					opacity={0.4}
					color='#000'
					width={26}
					height={26}
				/>
				<input
					type='text'
					className='bg-transparent h-full w-full p-2 text-[#000] outline-none'
					placeholder='Text search ddsadsa dsadsads....'
				/>
			</div>
			<div className='flex flex-row gap-4 items-center'>
				<div className='flex flex-row gap-4 items-center border-r-gray-50 border-r-2 px-4'>
					<Bell
						className='cursor-pointer'
						color='#000'
						width={24}
						height={24}
					/>
					<Link href={DASHBOARD_PAGES.SETTINGS}>
						<Settings
							className='cursor-pointer'
							color='#000'
							width={24}
							height={24}
						/>
					</Link>
				</div>
				<div className='flex flex-row gap-2 items-center'>
					<div className='w-10 h-10 bg-gray-300 rounded-full'></div>
					<span className='text-[#000]'>Retskey R.</span>
				</div>
			</div>
		</header>
	)
}
