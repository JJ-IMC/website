import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';
// Vectors
import type {FC} from 'react';
import FacebookLogoImage from '~/../files/index/footer/facebook.svg';
import InstagramLogoImage from '~/../files/index/footer/instagram.svg';
import NaverBlogLogoImage from '~/../files/index/footer/nblog.svg';

const CompanyTitle = styled('h2', {
	color: '$white',
	fontSize: '22px',
	fontWeight: '700',
	lineHeight: '32px',
	margin: 0,

	'@media only screen and (max-width: 1000px)': {
		fontSize: '14px',
		lineHeight: '20px',
	},
});

const CompanyMeta = styled('p', {
	color: '$white',
	fontSize: '18px',
	fontWeight: '400',
	lineHeight: '26px',
	margin: '15px 0',

	'@media only screen and (max-width: 1000px)': {
		fontSize: '14px',
		lineHeight: '20px',
	},
});

const SocialList = styled('ul', {
	listStyle: 'none',

	padding: 0,
	margin: 0,
	marginTop: '30px',

	display: 'flex',
	flexDirection: 'row',
	gap: '20px',
});

const SocialItemContainer = styled('li', {
	listStyle: 'none',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',

	textAlign: 'center',
});

const SocialItemLink = styled('a');

const SocialItemImage = styled('img', {
	margin: 0,
	objectFit: 'contain',
	height: '30px',
	width: '30px',

	'@media only screen and (max-width: 1000px)': {
		height: '20px',
		width: '20px',
	},
});

interface SocialItemProps {
  imageSource: string,
  link?: string,
}

const SocialItem: FC<SocialItemProps> = ({
	imageSource,
	link = '#',
}) => (
	<SocialItemContainer>
		<SocialItemLink href={link}>
			<SocialItemImage
				src={imageSource}
				alt='vector'
			/>
		</SocialItemLink>
	</SocialItemContainer>
);

export default function Footer() {
	return (
		<BaseContainer css={{background: '$brand'}}>
			<ContentContainer css={{background: 'inherit', padding: '64px 16px'}}>
				<CompanyTitle>주식회사 제이제이아이엠씨</CompanyTitle>
				<CompanyMeta>
          대표: 김창혁<br />
          경기 성남시 분당구 분당로 53번길 12<br />
          대구광역시 동구 동촌로 100, 301호<br />
          TEL: 1800-5704
				</CompanyMeta>

				<SocialList>
					<SocialItem imageSource={FacebookLogoImage} />
					<SocialItem imageSource={InstagramLogoImage} />
					<SocialItem imageSource={NaverBlogLogoImage} />
				</SocialList>
			</ContentContainer>
		</BaseContainer>
	);
}
