import BannerImageSource from '~/../files/index/banner.webp';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';

const Outer = styled(BaseContainer, {
	backgroundColor: '$brand',
	height: '400px',

	overflowX: 'hidden',
});

const Inner = styled(ContentContainer, {
	background: 'transparent',

	position: 'relative',
	display: 'flex',
	height: '100%',
	alignItems: 'center',
});

const Heading = styled('h3', {
	color: '$white',

	fontSize: '55px',
	lineHeight: '80px',
	margin: 0,

	'&>span': {
		color: '$brand',
		textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
	},

	position: 'relative',
	zIndex: 2,
});

const Image = styled('img', {
	height: '400px',
	width: '747px',

	position: 'absolute',
	top: 0,
	marginTop: 0,
	left: 0,
	marginRight: '16px', // Fix to the container padding
	marginLeft: '32.5%',

	objectFit: 'cover',
});

export default function Intermediate() {
	return (
		<Outer>
			<Inner>
				<div>
					<Heading>
						당신<span>의,</span>
					</Heading>
					<Heading>
						당신<span>에 의한,</span>
					</Heading>
					<Heading>
						당신<span>을 위한</span>
					</Heading>

					<Image
						src={BannerImageSource}
					/>
				</div>
			</Inner>
		</Outer>
	);
}
