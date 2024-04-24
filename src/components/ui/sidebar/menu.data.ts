import { ComputerIcon, FileBadge } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: FileBadge,
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard'
	},
	{
		icon: ComputerIcon,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Computer'
	}
]
