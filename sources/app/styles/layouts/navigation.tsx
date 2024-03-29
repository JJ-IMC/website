import {useState} from 'react';
import {HorizontalListItem, HorizontalListParent} from '../components/list/horizontal';
import {styled} from '../provider';
import MobileNavigationCollapseButtonImage from '~/../files/m-nav-col.svg';
import {useNavigate} from '@remix-run/react';

export const NavigationParent = styled(HorizontalListParent, {
	gap: '50px',
	margin: 0,

	'@media only screen and (max-width: 1000px)': {
		display: 'none',
	},
});

export const NavigationItem = styled(HorizontalListItem, {
	color: '$black',
	fontSize: '20px',

	cursor: 'pointer',

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

export const MobileNavigationParent = styled(HorizontalListParent, {
	margin: 0,
	justifyContent: 'space-between',

	backgroundColor: '$white',

	'@media only screen and (min-width: 1001px)': {
		display: 'none',
	},
});

export const MobileNavigationHeader = styled('h1', {
	color: '$brand',
	fontWeight: '700',
	fontSize: '16px',
	lineHeight: '24px',
	margin: '0',

	cursor: 'pointer',
});

export const MobileNavigationCollapseButton = styled('img', {
	zIndex: 2,
	height: '20px',
	width: '20px',
	objectFit: 'contain',
	cursor: 'pointer',
});

export const MobileNavigationCollapseBox = styled('ul', {
	zIndex: 2,
	backgroundColor: '$white',

	listStyle: 'none',
	paddingLeft: 0,

	height: 0,
	margin: 0,
	overflow: 'hidden',
	transition: 'height .3s ease',

	variants: {
		isActive: {
			true: {
				height: '100px',
			},
		},
	},

	'& > li': {
		listStyle: 'none',
		paddingLeft: 0,
	},

	'@media only screen and (min-width: 999px)': {
		display: 'none',
	},
});

export const listItems: Array<{
	slug: string,
	name: string,
	// eslint-disable-next-line no-unused-vars
	handler: (navigate: ReturnType<typeof useNavigate>) => void,
	isActive: boolean
}> = [
	{
		slug: 'story',
		name: 'STORY',
		handler(navigate) {
			navigate('/story');
		},
		isActive: false,
	},
	{
		slug: 'team',
		name: 'TEAM',
		handler(navigate) {
			navigate('/team');
		},
		isActive: false,
	},
	{
		slug: 'logo',
		name: 'JJIMC',
		handler(navigate) {
			navigate('/');
		},
		isActive: true,
	},
	{
		slug: 'service',
		name: 'SERVICE',
		handler(navigate) {
			navigate('/service');
		},
		isActive: false,
	},
	{
		slug: 'contact',
		name: 'CONTACT',
		handler(navigate) {
			navigate('/contact');
		},
		isActive: false,
	},
];

export function Navigation() {
	const navigate = useNavigate();
	const [mobileCollapseOpen, setMobileCollapseOpen] = useState(false);

	const onCollapseButtonClick = () => {
		setMobileCollapseOpen(!mobileCollapseOpen);
	};

	return (
		<>
			{/* Desktop section */}
			<NavigationParent>
				{
					listItems
						.map(listItem => (
							<NavigationItem
								key={'jjimc-list-' + listItem.slug}
								onClick={() => listItem.handler(navigate)}
								isActive={listItem.isActive}
							>
								{listItem.name}
							</NavigationItem>
						))
				}
			</NavigationParent>
			{/* Mobile section */}
			<MobileNavigationCollapseBox isActive={mobileCollapseOpen}>
				{
					listItems
						.filter(item => !item.isActive)
						.map(listItem => (
							<NavigationItem
								key={'jjimc-list-' + listItem.slug}
								onClick={() => listItem.handler(navigate)}
								isActive={listItem.isActive}
							>
								{listItem.name}
							</NavigationItem>
						))
				}
			</MobileNavigationCollapseBox>
			<MobileNavigationParent>
				<MobileNavigationHeader onClick={() => navigate('/', {replace: true})}>
					JJIMC
				</MobileNavigationHeader>
				<MobileNavigationCollapseButton
					src={MobileNavigationCollapseButtonImage}
					alt='button'
					onClick={onCollapseButtonClick}
				/>
			</MobileNavigationParent>
		</>
	);
}
