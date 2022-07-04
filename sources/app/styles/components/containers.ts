import {styled} from '../provider';

export const BaseContainer = styled('section', {
	color: '$black',
	backgroundColor: '$white',
	fontFamily: '$sansSerif',

	margin: 0,
});

export const ContentContainer = styled(BaseContainer, {
	padding: '16px',
	margin: '0 auto',
	maxWidth: '1200px',
});
