import type {FC} from 'react';
import HeartVector from '~/../files/service/heart.svg';
import ShapeVector from '~/../files/service/shape.svg';
import LipVector from '~/../files/service/lip.svg';
import MoneyVector from '~/../files/service/money.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {invertedTheme, styled} from '~/styles/provider';

const Heading = styled('h2', {
	fontWeight: '900',
	fontSize: '40px',
	lineHeight: '60px',

	color: '$black',

	'&>span': {
		color: '$brand',
	},

	marginTop: '170px',

	'@media only screen and (max-width: 400px)': {
		fontSize: '18px',
		lineHeight: '26px',
	},
});

const Details = styled('p', {
	fontWeight: '400',
	fontSize: '18px',
	lineHeight: '26px',

	color: '$black',

	'@media only screen and (max-width: 400px)': {
		fontSize: '10px',
		lineHeight: '14px',
	},
});

const SubHeading = styled('h3', {
	fontWeight: '400',
	fontSize: '24px',
	lineHeight: '35px',

	'&>span': {
		color: '$brand',
	},

	'@media only screen and (max-width: 400px)': {
		fontSize: '12px',
		lineHeight: '17px',
	},
});

const HidingProxy = styled('div', {
	overflow: 'hidden',
});

const Shape = styled('img', {
	position: 'absolute',

	width: '131px',
	height: '134px',

	top: 0,
	marginTop: '145px',
	left: 0,
	marginLeft: '680px',
});

const KeyFeatureList = styled('ul', {
	listStyle: 'none',
	padding: 0,

	display: 'flex',
	flexDirection: 'row',
	gap: '50px',

	marginBottom: '130px',
});

const KeyFeatureItemFrame = styled('li', {
	listStyle: 'none',
	padding: 0,

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	gap: '15px',
});

const KeyFeatureItemImage = styled('img', {
	width: '70px',
	height: '100%',

	margin: '0 auto',

	'@media only screen and (max-width: 400px)': {
		width: '30px',
	},
});

const KeyFeatureItemText = styled('p', {
	fontWeight: '700',
	fontSize: '18px',
	lineHeight: '26px',

	color: '$black',

	'@media only screen and (max-width: 400px)': {
		fontSize: '12px',
		lineHeight: '18px',
	},
});

interface IKeyFeatureProps {
	imageUrl: string
}

const KeyFeature: FC<IKeyFeatureProps> = ({
	imageUrl,
	children,
}) => (
	<KeyFeatureItemFrame>
		<KeyFeatureItemImage src={imageUrl} />
		<KeyFeatureItemText>
			{children}
		</KeyFeatureItemText>
	</KeyFeatureItemFrame>
);

export default function Main() {
	return (
		<BaseContainer className={invertedTheme}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden'}}>
				<Navigation />
				<Heading>
          빠른 확산 우수한 효과 <span>“바이럴 마케팅”</span>
				</Heading>
				<Details>
          네이버 블로그 (상위노출, 포스팅배포, 체험단/기자단, 인플루언서),<br />
          카페 (침투, 상위노출), 지식인 상위노출 / 네이버지도(플레이스) 상위노출
				</Details>
				<SubHeading>
          바이러스처럼 빠르게 확산된다는 의미를 가진 바이럴마케팅!<br />
          비용 대비 가장 우수한 효과를 가진 방법으로<br />
					<span>JJIMC가 가장 자신있는 분야</span> 입니다.<br />
				</SubHeading>

				<HidingProxy>
					<Shape src={ShapeVector} />
				</HidingProxy>

				<KeyFeatureList>
					<KeyFeature imageUrl={LipVector}>
						고객들과의<br />
						커뮤니케이션
					</KeyFeature>
					<KeyFeature imageUrl={HeartVector}>
						브랜드<br />
						장점부각
					</KeyFeature>
					<KeyFeature imageUrl={MoneyVector}>
						키워드 노출<br />
						= 매출 상승
					</KeyFeature>
				</KeyFeatureList>
			</ContentContainer>
		</BaseContainer>
	);
}
