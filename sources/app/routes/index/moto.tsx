import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';

const Outer = styled(BaseContainer, {
	backgroundColor: '#E7ECFF',

	overflowX: 'hidden',
});

const Inner = styled(ContentContainer, {
	background: 'transparent',

	position: 'relative',
	display: 'flex',
	height: '600px',
	alignItems: 'center',
	justifyItems: 'center',
});

const Container = styled('div', {
	margin: '0 auto',
});

const Heading = styled('h2', {
	color: '#515C82',

	fontSize: '100px',
	fontWeight: '500',
	lineHeight: '150px',
	margin: 0,

	'@media only screen and (max-width: 1200px)': {
		lineHeight: '45px',
		fontSize: '45px',
	},

	'&>span': {
		color: '#E7ECFF',
		textShadow: '-1px 1px 0 #515C82, 1px 1px 0 #515C82, 1px -1px 0 #515C82, -1px -1px 0 #515C82',
	},

	'&>br+span': {
		marginLeft: '250px',

		'@media only screen and (max-width: 1200px)': {
			marginLeft: '50px',
		},
	},

	'&>p': {
		textAlign: 'center',
		fontSize: '20px',
		lineHeight: '30px',
		fontWeight: '400',
	},

	position: 'relative',
	zIndex: 2,
});

export default function Moto() {
	return (
		<Outer>
			<Inner>
				<Container>
					<Heading>
						<span>How</span> we <span>build</span><br /><span />
            your <span>branding</span> “R”

						<br />
						<p>당신의 브랜드는 곧 “R”이 됩니다.</p>
					</Heading>
				</Container>
			</Inner>
		</Outer>
	);
}
