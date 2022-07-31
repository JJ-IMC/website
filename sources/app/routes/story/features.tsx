import type {FC} from 'react';
import SideImage from '~/../files/story/features/side.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme, styled} from '~/styles/provider';
import SettingsIcon from '~/../files/story/features/settings-icon.svg';
import FolderIcon from '~/../files/story/features/folder-icon.svg';
import ChartsIcon from '~/../files/story/features/charts-icon.svg';

const SideImageDeligate = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',

	'&>*': {
		flex: 1,
	},
});

const LeftImage = styled('img', {
	display: 'inline-flex',

	height: '300px',
	width: 'auto',

	'@media only screen and (max-width: 1000px)': {
		display: 'none',
	},
});

const FeaturesList = styled('ul', {
	listStyle: 'none',
	padding: 0,

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
});

const FeaturesItemOuter = styled('li', {
	display: 'inline-flex',
	flexDirection: 'row',

	gap: '16px',

	margin: 0,
});

const CenterProxy = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
});

const FeaturesItemIcon = styled('img', {
	width: '50px',
	height: '50px',
});

const FeaturesItemContent = styled('p', {
	color: '$black',
	fontWeight: '700',
	fontSize: '24px',
	lineHeight: '35px',

	'&>span': {
		color: '$brand',
	},

	width: '100%',

	'@media only screen and (max-width: 1000px)': {
		fontSize: '14px',
		lineHeight: '20px',
	},
});

interface FeaturesItemProps {
  imageUrl: string
}

const FeaturesItem: FC<FeaturesItemProps> = ({
	imageUrl,
	children,
}) => (
	<FeaturesItemOuter>
		<CenterProxy>
			<FeaturesItemIcon src={imageUrl} alt='vector' />
		</CenterProxy>
		<CenterProxy>
			<FeaturesItemContent>
				{children}
			</FeaturesItemContent>
		</CenterProxy>
	</FeaturesItemOuter>
);

export default function Features() {
	return (
		<BaseContainer className={invertedTheme}>
			<ContentContainer css={{padding: '175px 16px'}}>
				<SideImageDeligate>
					<LeftImage src={SideImage} alt='two people discussing' />
					<FeaturesList>
						<FeaturesItem imageUrl={SettingsIcon}>
              각 분야의 전문가들로 이루어진 JJIMC는<br />
              진정성 있는 <span>솔루션을 제시하는 기업</span>입니다.
						</FeaturesItem>
						<FeaturesItem imageUrl={FolderIcon}>
              급변하는 흐름을 정확히 읽어내는 JJIMC는<br />
							<span>소비자의 마음을 움직이는 기업</span>입니다.
						</FeaturesItem>
						<FeaturesItem imageUrl={ChartsIcon}>
              브랜드의 숨겨진 스토리까지 꿰뚫어 보는<br />
              JJIMC는 <span>성과로 증명하는 기업</span>입니다.
						</FeaturesItem>
					</FeaturesList>
				</SideImageDeligate>
			</ContentContainer>
		</BaseContainer>
	);
}
