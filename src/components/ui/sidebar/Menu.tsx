import React, { FC } from 'react'

import MenuItem from './MenuItem'
import { IMenuItem } from './menu.interface'

interface IMenu {
	data: IMenuItem[]
	title: string
}

const MenuSidebar: FC<IMenu> = ({ data, title }) => {
	return (
		<div className='p-3 relative  px-layout gap-2 flex flex-col'>
			<span className='font-light opacity-50 text-xs'>{title}</span>
			{data.map(item => (
				<MenuItem
					item={item}
					key={item.link}
				/>
			))}
		</div>
	)
}

export default MenuSidebar
