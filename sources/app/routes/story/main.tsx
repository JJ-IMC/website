import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';

export const BackgroundHeading = styled('h1', {
	fontWeight: '900',
	fontSize: '80px',
	lineHeight: '120px',

	color: '$white',
	textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',

	position: 'absolute',
	top: 0,
	marginTop: '180px',
	right: 0,
});

export default function Main() {
	return (
		<BaseContainer className={invertedTheme} css={{minHeight: '750px'}}>
			<ContentContainer>
				<Navigation />
				<BackgroundHeading>
					JJIMC
				</BackgroundHeading>
			</ContentContainer>
		</BaseContainer>
	);
}
