import type {FC} from 'react';
import CEOAvatar from '~/../files/team/ceo.webp';
import Marketing1MemberAvatar from '~/../files/team/marketing1-m.webp';
import Marketing1Member2Avatar from '~/../files/team/marketing1-m2.webp';
import Marketing1PMAvatar from '~/../files/team/marketing1-pm.webp';
import Marketing2AMAvatar from '~/../files/team/marketing2-am.webp';
import Marketing2PMAvatar from '~/../files/team/marketing2-pm.webp';
import SalesManagerAvatar from '~/../files/team/sales-m.webp';
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

		'@media only screen and (max-width: 650px)': {
			fontSize: '40px',
			lineHeight: '60px',
		},
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

		'@media only screen and (max-width: 650px)': {
			fontSize: '20px',
			lineHeight: '30px',
		},
	},
});

const ProfileGroup = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	gap: '100px',
	justifyContent: 'center',

	maxWidth: '1200px',
	marginBottom: '100px',
});

const ProfileContainer = styled('div', {
	display: 'inline-flex',
	flexDirection: 'column',
	gap: '20px',
});

const ProfileTexts = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	textAlign: 'center',

	'&>h2': {
		color: '$black',
		fontWeight: '700',
		fontSize: '20px',
		lineHeight: '30px',
		margin: 0,
		padding: 0,
	},

	'&>p': {
		color: '$brand',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '25px',
	},
});

const ProfileImage = styled('img', {
	width: '200px',
	height: '200px',
	borderRadius: '50%',
	objectFit: 'cover',

	'@media only screen and (max-width: 650px)': {
		height: '140px',
		width: '140px',
	},
});

interface IProfileProps {
  imageUrl: string,
  name: string,
  position: string,
}

const Profile: FC<IProfileProps> = ({
	imageUrl,
	name,
	position,
}) => (
	<ProfileContainer>
		<ProfileImage
			src={imageUrl}
			alt={`${name} avatar`}
		/>
		<ProfileTexts>
			<h2>{name}</h2>
			<p>{position}</p>
		</ProfileTexts>
	</ProfileContainer>
);

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

					<ProfileGroup>
						<Profile
							imageUrl={CEOAvatar}
							name='김창혁'
							position='CEO'
						/>
						<Profile
							imageUrl={Marketing1PMAvatar}
							name='이대욱'
							position='Marketing 1Team PM'
						/>
						<Profile
							imageUrl={Marketing1Member2Avatar}
							name='차종기'
							position='Marketing 1Team M'
						/>
						<Profile
							imageUrl={Marketing1MemberAvatar}
							name='이송은'
							position='Marketing 1Team M'
						/>
						<Profile
							imageUrl={Marketing2PMAvatar}
							name='김윤슬'
							position='Marketing 2Team PM'
						/>
						<Profile
							imageUrl={Marketing2AMAvatar}
							name='정다정'
							position='Marketing 2Team AM'
						/>
						<Profile
							imageUrl={SalesManagerAvatar}
							name='구재환'
							position='Sales Manager'
						/>
					</ProfileGroup>
				</ContentContainer>
			</BaseContainer>
		</>
	);
}
