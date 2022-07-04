import BannerImageSource from '~/../files/index/banner.webp';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';

const Inner = styled(BaseContainer, {
	backgroundColor: '$brand',
	height: '400px',
});

const Outer = styled(ContentContainer, {
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
});

const Image = styled('img', {
	height: '100%',

	position: 'absolute',
	top: 0,
	marginTop: 0,
	right: 0,
	marginRight: '16px', // Fix to the container padding
});

export default function Intermediate() {
	return (
		<Inner>
			<Outer>
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
			</Outer>
		</Inner>
	);
}
