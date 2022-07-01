import {HorizontalListItem, HorizontalListParent} from '../components/list/horizontal';
import {styled} from '../provider';

export const NavigationItem = styled(HorizontalListItem, {
	color: '$black',
	fontSize: '20px',

	variants: {
		isActive: {
			true: {
				color: '$brand',
				fontSize: '30px',
				fontWeight: '700',
			},
		},
	},
});

export const listItems: Array<{
	slug: string,
	name: string,
	handler: () => void,
	isActive: boolean
}> = [
	{
		slug: 'menu1',
		name: 'Menu',
		handler() { },
		isActive: false,
	},
	{
		slug: 'menu2',
		name: 'Menu',
		handler() { },
		isActive: false,
	},
	{
		slug: 'logo',
		name: 'JJIMC',
		handler() { },
		isActive: true,
	},
	{
		slug: 'menu3',
		name: 'Menu',
		handler() { },
		isActive: false,
	},
	{
		slug: 'menu4',
		name: 'Menu',
		handler() { },
		isActive: false,
	},
];

export function Navigation() {
	return (
		<HorizontalListParent
			css={{
				margin: 0,
			}}
		>
			{
				listItems
					.map(listItem => (
						<NavigationItem
							key={'jjimc-list-' + listItem.slug}
							isActive={listItem.isActive}
						>
							{listItem.name}
						</NavigationItem>
					))
			}
		</HorizontalListParent>
	);
}
