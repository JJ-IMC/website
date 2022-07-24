import {styled} from '~/styles/provider';

export const HorizontalListParent = styled('ul', {
	listStyle: 'none',
	paddingLeft: 0,

	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '18px',
});

export const HorizontalListItem = styled('li', {
	listStyle: 'none',
});
