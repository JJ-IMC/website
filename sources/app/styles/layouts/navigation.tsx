import {HorizontalListItem, HorizontalListParent} from '../components/list/horizontal';
import {styled} from '../provider';

export const NavigationParent = styled(HorizontalListParent, {
	gap: '50px',
});

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
		slug: 'story',
		name: 'STORY',
		handler() { },
		isActive: false,
	},
	{
		slug: 'team',
		name: 'TEAM',
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
		slug: 'service',
		name: 'SERVICE',
		handler() { },
		isActive: false,
	},
	{
		slug: 'contact',
		name: 'CONTACT US',
		handler() { },
		isActive: false,
	},
];

export function Navigation() {
	return (
		<NavigationParent
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
		</NavigationParent>
	);
}
