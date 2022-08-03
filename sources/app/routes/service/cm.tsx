import LaptopImage from '~/../files/service/cm/laptop.svg';
import MoneyImage from '~/../files/service/cm/money.svg';
import PaperImage from '~/../files/service/cm/paper.svg';
import PeopleImage from '~/../files/service/cm/people.svg';
import TvImage from '~/../files/service/cm/tv.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme, styled} from '~/styles/provider';
import {Details, Emphasis, Heading, IconItem, IconItemGroup} from './sns';

export const CmIconItem = styled(IconItem, {
	'&>div': {
		background: 'rgba(195,209,255,.2)',
	},
});

export default function Cm() {
	return (
		<BaseContainer>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<div className={invertedTheme}>
					<Heading>
						브랜드의 얼굴 <span>“공식 채널 관리”</span>
					</Heading>
					<Details>
						인스타그램, 페이스북, 브랜드 블로그
					</Details>
					<Emphasis>
						잘 키운 브랜드 <span>공식채널</span> 하나, 열 영업사원 안 부럽다
					</Emphasis>

					<IconItemGroup>
						<CmIconItem>
							<div>
								<img src={MoneyImage} alt='money' />
							</div>
							<p>
								남다른 기획,<br />
								아이디어!<br />
								컨텐츠는 <span>자산</span>입니다
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={TvImage} alt='tv' />
							</div>
							<p>
								스토리, 시각화를 통한<br />
								확실한 <span>브랜딩 효과</span>
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={PaperImage} alt='paper' />
							</div>
							<p>
								신뢰도, 인지도<br />
								공식채널을 통한<br />
								<span>확산 효과</span>까지 단 한 번에
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={LaptopImage} alt='laptop' />
							</div>
							<p>
								홈페이지<br />
								<span>UV 상승</span>
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={PeopleImage} alt='people' />
							</div>
							<p>
								간편하고 편리한<br />
								소통으로 고객과의<br />
								<span>친밀도 UP</span>
							</p>
						</CmIconItem>
					</IconItemGroup>
				</div>
			</ContentContainer>
		</BaseContainer>
	);
}
