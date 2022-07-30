import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';
import EmphasisTextDecoratingImage from '~/../files/story/main/bubble.svg';

const BackgroundHeading = styled('h2', {
	fontWeight: '900',
	fontSize: '200px',
	lineHeight: '300px',

	color: '$white',
	textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',

	position: 'absolute',
	top: 0,
	marginTop: '180px',
	right: 0,
});

const Heading = styled('h1', {
	fontWeight: '700',
	fontSize: '45px',
	lineHeight: '65px',

	color: '$black',

	'&>span': {
		color: '$brand',
	},

	paddingTop: '300px',
	marginBottom: '25px',
});

const Description = styled('p', {
	fontWeight: '300',
	fontSize: '20px',
	lineHeight: '30px',

	margin: 0,
});

const EmphasisText = styled('h3', {
	fontWeight: '700',
	fontSize: '60px',
	lineHeight: '87px',

	color: '$black',

	'&>span': {
		color: '$white',
		textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
	},

	position: 'relative',

	'&>img': {
		position: 'absolute',

		width: '300px',
		height: '300px',
		borderRadius: '50%',
		top: 0,
		marginTop: '-100px',
		left: 0,
		marginLeft: '280px',
	},

	marginTop: '300px',
});

export default function Main() {
	return (
		<BaseContainer className={invertedTheme} css={{minHeight: '750px'}}>
			<ContentContainer>
				<Navigation />
				<BackgroundHeading>
					JJIMC
				</BackgroundHeading>
				<Heading>
					<span>최적의 솔루션</span>을<br />
					제안할 수 없다면 진행하지 않습니다.
				</Heading>
				<Description>
					JJ Integrated Marketing Communicat
				</Description>

				<EmphasisText>
					누구나 <span>광고</span>를 하고<br />
					누구나 <span>광고</span>를 접하는 세상

					<img src={EmphasisTextDecoratingImage} alt='bubble' />
				</EmphasisText>
			</ContentContainer>
		</BaseContainer>
	);
}
