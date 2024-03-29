import HeroImageSource from '~/../files/index/hero.webp';
import {RoundedButton} from '~/styles/components/buttons';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';

const Container = styled(ContentContainer, {
	position: 'relative',
	height: '100%',
});

const OutlinedText = styled('p', {
	fontSize: '160px',
	margin: 0,

	color: '$white',
	textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',

	'@media only screen and (max-width: 800px)': {
		fontSize: '100px',
	},

	variants: {
		position: {
			first: {
				position: 'absolute',
				right: 0,
				marginRight: '90px',
				top: 0,
				marginTop: '200px',

				'@media only screen and (max-width: 800px)': {
					marginRight: '25px',
					overflow: 'hidden',
				},
			},
			third: {
				position: 'absolute',
				right: 0,
				marginRight: '200px',
				top: 0,
				marginTop: '750px',

				'@media only screen and (max-width: 800px)': {
					zIndex: 3,

					marginRight: 0,
					overflow: 'hidden',
				},
			},
		},
	},
});

const EmphasizedText = styled('p', {
	fontSize: '160px',
	margin: 0,

	color: '$brand',

	position: 'absolute',
	left: 0,
	marginLeft: '4px',
	top: 0,
	marginTop: '500px',

	// Fix over HeroImage
	zIndex: 2,

	'@media only screen and (max-width: 800px)': {
		fontSize: '100px',
		marginLeft: '50px',
	},
});

const InteractiveBox = styled('article', {
	position: 'absolute',
	right: 0,
	marginRight: '16px',
	top: 0,
	marginTop: '470px',

	'&>p': {
		fontSize: '24px',
		textAlign: 'right',

		margin: '8px 0',
	},

	'&>p>strong': {
		color: '$brand',
		fontWeight: '700',
	},

	'@media only screen and (max-width: 800px)': {
		marginTop: '925px',
	},
});

const Comment = styled('p', {
	fontWeight: '300',
});

const Button = styled(RoundedButton, {
	float: 'right',
	marginTop: '15px',

	fontSize: '20px',
	fontWeight: '300',

	color: '$black',
	background: '$brand',

	cursor: 'pointer',
});

const HeroImage = styled('img', {
	borderRadius: '100%',
	width: '500px',
	height: '500px',

	position: 'absolute',
	left: 0,
	marginLeft: '80px',
	top: 0,
	marginTop: '300px',

	overflow: 'hidden',

	'@media only screen and (max-width: 800px)': {
		marginLeft: '-200px',
		marginTop: '400px',
	},
});

export default function Main() {
	const handleContactButton = () => {
		window.open('mailto:contact@jjimc.net');
	};

	return (
		<BaseContainer className={invertedTheme} css={{
			minHeight: '1080px',

			'@media only screen and (max-width: 800px)': {
				minHeight: '1200px',
			},
		}}>
			<Container>
				<Navigation />
				<OutlinedText position='first'>
          MAKE
				</OutlinedText>
				<EmphasizedText>
          YOUR
				</EmphasizedText>
				<OutlinedText position='third'>
          BRAND
				</OutlinedText>

				<HeroImage
					alt='A table with a white bottle and box shelf'
					src={HeroImageSource}
				/>

				<InteractiveBox>
					<p>
						<strong>S</strong>pecial <strong>S</strong>olution
					</p>
					<Comment>결과로 입증하는 마케팅 전문 기업</Comment>
					<Button onClick={handleContactButton}>CONTACT US</Button>
				</InteractiveBox>
			</Container>
		</BaseContainer>
	);
}
