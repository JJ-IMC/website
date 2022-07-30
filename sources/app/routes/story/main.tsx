import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';

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
			</ContentContainer>
		</BaseContainer>
	);
}
