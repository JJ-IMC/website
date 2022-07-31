import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';

const Headings = styled('div', {
	margin: '125px 0',

	'&>h1': {
		fontWeight: '600',
		fontSize: '90px',
		lineHeight: '135px',
		margin: 0,

		color: '$brand',
	},

	'&>h2': {
		fontWeight: '600',
		fontSize: '50px',
		lineHeight: '75px',
		margin: 0,

		color: '$black',

		'&>span': {
			color: '$white',
			textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
		},
	},
});

export default function Members() {
	return (
		<>
			<BaseContainer className={invertedTheme}>
				<ContentContainer>
					<Navigation />

					<Headings>
						<h1>HI!</h1>
						<h2>
							<span>WE ARE</span><br />
              JJIMC TEAM MEMBERS !
						</h2>
					</Headings>
				</ContentContainer>
			</BaseContainer>
		</>
	);
}
