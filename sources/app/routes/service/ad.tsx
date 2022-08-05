import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme, styled} from '~/styles/provider';
import {Details, Heading} from './sns';

const AdDetail = styled(Details, {
	fontWeight: '700',
	fontSize: '24px',
	lineHeight: '35px',
});

const Groups = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px 0',

	'&>div': {
		flexGrow: '1',
		flexShrink: '1',
		flexBasis: 'auto',
		padding: '8px',
		width: '100%',
		minWidth: '450px',
		maxWidth: 'calc(50% - 16px)',
	},
});

const RoundCover = styled('div', {
	color: '#4B61AD',
	display: 'inline',
	padding: '9px 20px',
	borderRadius: '100px',
	border: '1px solid #4B61AD',

	fontWeight: '700',
	fontSize: '12px',
	lineHeight: '17px',
});

const RoundCoverGroup = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px',
	marginBottom: '12px',
});

const EmphasisContainer = styled('div', {
	color: '#7291FF',

	width: '100%',
	padding: '12px 15px',
	minWidth: 'calc(50% - 16px)',
	background: 'rgba(255, 255, 255, 0.4)',
	borderRadius: '20px',
});

export default function Ad() {
	return (
		<BaseContainer css={{background: '#EDF1FF'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<div className={invertedTheme}>
					<Heading>
            고객을 끌어당기는 힘 <span>“SA/DA”</span>
					</Heading>
				</div>

				<Groups>
					<div>
						<AdDetail css={{color: '#4B61AD'}}>
							▶️ SA (Search Ad) = 검색광고
						</AdDetail>

						<RoundCoverGroup>
							<RoundCover>
								#키워드 광고
							</RoundCover>
							<RoundCover>
								#브랜드 광고
							</RoundCover>
						</RoundCoverGroup>

						<EmphasisContainer>
							<ul>
								<li>키워드 검색 등 사용자의 노력이 있을 때 노출되는 광고</li>
								<li>관련성이 높은 사용자에게 자사 브랜드를 알리는 방법</li>
							</ul>
						</EmphasisContainer>
					</div>
					<div>
						<AdDetail css={{color: '#75A3FF'}}>
							▶ DA (Display Ad) = 디스플레이 광고
						</AdDetail>

						<RoundCoverGroup>
							<RoundCover>
								#배너 광고
							</RoundCover>
							<RoundCover>
								#스폰서드
							</RoundCover>
							<RoundCover>
								#카카오모먼트
							</RoundCover>
							<RoundCover>
								#SNS 타겟팅 광고
							</RoundCover>
						</RoundCoverGroup>

						<EmphasisContainer>
							<ul>
								<li>키워드 검색 등 사용자의 노력이 있을 때 노출되는 광고</li>
								<li>관련성이 높은 사용자에게 자사 브랜드를 알리는 방법</li>
							</ul>
						</EmphasisContainer>
					</div>
				</Groups>
			</ContentContainer>
		</BaseContainer>
	);
}
