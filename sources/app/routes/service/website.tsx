import PlantImage from '~/../files/service/website/plant.svg';
import PuzzleImage from '~/../files/service/website/puzzle.svg';
import SettingsImage from '~/../files/service/website/settings.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme} from '~/styles/provider';
import {CmIconItem} from './cm';
import {Details, Emphasis, Heading, IconItemGroup} from './sns';

export default function Website() {
	return (
		<BaseContainer css={{background: '#EDF1FF'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<div className={invertedTheme}>
					<Heading>
            가치를 높이는 브랜딩의 시작 <span>“홈페이지 제작”</span>
					</Heading>
					<Details>
            고객이 우리 브랜드를 찾는 주소 “홈페이지”
					</Details>
					<Emphasis>
            브랜드에 맞는 <span>톤앤매너 구축</span>과 <span>상세페이지 제작</span>,<br />
						<span>홈페이지 설계 및 디자인</span>까지 함께 합니다.
					</Emphasis>

					<IconItemGroup>
						<CmIconItem>
							<div>
								<img src={PlantImage} alt='plant' />
							</div>
							<p>
                브랜드<br />
								가치 향상
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={SettingsImage} alt='settings' />
							</div>
							<p>
                편리한<br />
								설정과 관리
							</p>
						</CmIconItem>
						<CmIconItem>
							<div>
								<img src={PuzzleImage} alt='puzzle' />
							</div>
							<p>
                뛰어난 접근성의<br />
								반응형 웹
							</p>
						</CmIconItem>
					</IconItemGroup>
				</div>
			</ContentContainer>
		</BaseContainer>
	);
}
