import ChartVector from '~/../files/service/live/chart.svg';
import CoupleVector from '~/../files/service/live/couple.svg';
import MoneyVector from '~/../files/service/live/money.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme} from '~/styles/provider';
import {KeyFeature, KeyFeatureList} from './cast';
import {Details, Heading} from './sns';

export default function Live() {
	return (
		<BaseContainer css={{background: '#BBCAFF'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent'}}>
				<Heading>
          정보 같은 광고 <span>“언론 홍보”</span>
				</Heading>
				<Details>
          광고에 대한 <span>거부감을 낮추고</span> 자연스럽게!
				</Details>

				<div className={invertedTheme}>
					<KeyFeatureList>
						<KeyFeature imageUrl={CoupleVector}>
              MZ 세대 <br />
              확보 용이
						</KeyFeature>
						<KeyFeature imageUrl={MoneyVector}>
              유통과정 최소화 <br />
              ▶ 수수료 절약
						</KeyFeature>
						<KeyFeature imageUrl={ChartVector}>
              구매전환율 <br />
              높음
						</KeyFeature>
					</KeyFeatureList>
				</div>
			</ContentContainer>
		</BaseContainer>
	);
}
