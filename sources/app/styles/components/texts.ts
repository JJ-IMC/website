import {styled} from '../provider';

export const OutlinedText = styled('p', {
	fontSize: '160px',
	margin: 0,

	color: '$white',
	textShadow: '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',

	variants: {
		inverse: {
			true: {
				color: '$black',
				textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
			},
		},
	},
});
