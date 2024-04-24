'use client'

import { FileBoxIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import BalanceBadge from './BalanceBadge'
import MenuSidebar from './Menu'
import { MENU } from './menu.data'

const [minWidth, maxWidth, defaultWidth] = [180, 250, 200]

export function Sidebar() {
	const [width, setWidth] = useState(
		(typeof window !== 'undefined' &&
			parseInt(localStorage.getItem('sidebarWidth') as string)) ||
			defaultWidth
	)

	const isResized = useRef(false)

	useEffect(() => {
		window.addEventListener('mousemove', e => {
			if (!isResized.current) {
				return
			}

			setWidth(previousWidth => {
				const newWidth = previousWidth + e.movementX / 2

				const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth

				return isWidthInRange ? newWidth : previousWidth
			})
		})

		window.addEventListener('mouseup', () => {
			isResized.current = false
		})
	}, [])

	useEffect(() => {
		localStorage.setItem('sidebarWidth', width.toString())
	}, [width])

	return (
		<div className='flex flex-row select-none'>
			<aside
				style={{ width: `${width / 12}rem` }}
				className='w-full bg-sidebar flex flex-col'
			>
				<Link href={DASHBOARD_PAGES.HOME}>
					<div className=' h-28 flex flex-row items-center justify-start gap-2 px-layout'>
						<FileBoxIcon
							width={40}
							height={40}
						/>
						<span>Filestack.</span>
					</div>
				</Link>
				<nav className='flex flex-col h-full justify-start gap-4'>
					<MenuSidebar
						title='General'
						data={MENU}
					/>
					<MenuSidebar
						title='File'
						data={MENU}
					/>
				</nav>
				<BalanceBadge />
			</aside>
			<div
				className='bg-sidebar w-2 cursor-col-resize '
				onMouseDown={() => {
					isResized.current = true
				}}
			/>
		</div>
	)
}
