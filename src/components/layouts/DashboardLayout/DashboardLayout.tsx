'use client'

import { type ReactNode, useState } from 'react'

import Detailed from '@/components/ui/detailed/Detailed'
import { Header } from '@/components/ui/header/Header'
import { Sidebar } from '@/components/ui/sidebar/Sidebar'

type DashboardLayoutProps = {
	children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const [visible, setVisible] = useState(true)

	return (
		<div className='grid min-h-screen grid-cols-dashboard'>
			<Sidebar />
			<main className='overflow-x-hidden max-h-screen relative'>
				<Header />
				<div
					className={`h-[calc(100vh-112px)] grid ${visible ? 'grid-cols-detailed' : 'grid-cols-1'}`}
				>
					<div className='flex-1 h-full'>{children}</div>
					{visible && <Detailed setVisible={setVisible} />}
				</div>
			</main>
		</div>
	)
}
