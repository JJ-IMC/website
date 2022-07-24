import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';

const Outer = styled(BaseContainer, {
	background: 'linear-gradient(90deg, #95ABFF 0%, #3B63F2 101.77%)',

	overflowX: 'hidden',
});

const Inner = styled(ContentContainer, {
	background: 'transparent',

	position: 'relative',
	display: 'flex',
	height: '250px',
	alignItems: 'center',
	justifyItems: 'center',
});

const Container = styled('div', {
	margin: '0 auto',
});

const Heading = styled('h2', {
	color: '#6988F9',
	textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
	textAlign: 'center',

	fontSize: '60px',
	fontWeight: '700',
	lineHeight: '90px',
	margin: 0,

	'&>span': {
		color: '$white',
		textShadow: 'none',
	},

	'&>p': {
		color: 'white',
		textShadow: 'none',

		fontSize: '20px',
		fontWeight: '400',
		lineHeight: '28px',

		margin: 0,
		marginTop: '10px',
	},

	position: 'relative',
	zIndex: 2,
});

export default function World() {
	return (
		<Outer>
			<Inner>
				<Container>
					<Heading>
						WO<span>Respect</span>LD
						<br /><p>세상의 중심</p>
					</Heading>
				</Container>
			</Inner>
		</Outer>
	);
}
