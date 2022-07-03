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
	textShadow: '$textOutlined',

	variants: {
		position: {
			first: {
				position: 'absolute',
				right: 0,
				marginRight: '90px',
				top: 0,
				marginTop: '200px',
			},
			third: {
				position: 'absolute',
				right: 0,
				marginRight: '200px',
				top: 0,
				marginTop: '750px',
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
});

const Comment = styled('p', {
	fontWeight: '300',
});

export default function IndexPage() {
	return (
		<BaseContainer className={invertedTheme} css={{height: '1000px'}}>
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

				<InteractiveBox>
					<p>
						<strong>S</strong>pecial <strong>S</strong>olution
					</p>
					<Comment>결과로 입증하는 마케팅 전문 기업</Comment>
				</InteractiveBox>
			</Container>
		</BaseContainer>
	);
}
