import type {FC} from 'react';
import BatteryVector from '~/../files/service/cast/battery.svg';
import PaperVector from '~/../files/service/cast/paper.svg';
import PhoneVector from '~/../files/service/cast/phone.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme, styled} from '~/styles/provider';
import {Details, Heading} from './sns';

const KeyFeatureList = styled('ul', {
	listStyle: 'none',
	padding: 0,

	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
	gap: '50px',

	marginTop: '100px',
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

export default function Cast() {
	return (
		<BaseContainer css={{background: '#111B3F'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent'}}>
				<Heading>
          정보 같은 광고 <span>“언론 홍보”</span>
				</Heading>
				<Details>
          광고에 대한 <span>거부감을 낮추고</span> 자연스럽게!
				</Details>

				<div className={invertedTheme}>
					<KeyFeatureList>
						<KeyFeature imageUrl={PhoneVector}>
              소비자들의 신뢰 <br />
              ▶️ 능동적 접근
						</KeyFeature>
						<KeyFeature imageUrl={PaperVector}>
              기사 형태의 홍보 <br />
              ▶️ 브랜드 인지도 상승
						</KeyFeature>
						<KeyFeature imageUrl={BatteryVector}>
              신뢰성 <br />
              & <br />
              공신력
						</KeyFeature>
					</KeyFeatureList>
				</div>
			</ContentContainer>
		</BaseContainer>
	);
}
