import {styled} from '../provider';

export const BaseContainer = styled('section', {
	color: '$black',
	backgroundColor: '$white',
	fontFamily: '$sansSerif',

	padding: '16px',
});

export const ContentContainer = styled(BaseContainer, {
	margin: '0 auto',
	maxWidth: '720px',
});
