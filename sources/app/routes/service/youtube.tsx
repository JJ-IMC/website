import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {invertedTheme, styled} from '~/styles/provider';
import {Details, Heading} from './sns';
import YoutubeFiveImage from '~/../files/service/youtube/youtube5.jpg';
import YoutubeSixImage from '~/../files/service/youtube/youtube6.jpg';
import Youtube15Image from '~/../files/service/youtube/youtube15.jpg';
import YoutubeAdImage from '~/../files/service/youtube/youtubead.jpg';
import YoutubePlaylistImage from '~/../files/service/youtube/youtubepl.jpg';
import YoutubeSearchImage from '~/../files/service/youtube/youtubeseo.jpg';

const Group = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	maxWidth: '1050px',
	gap: '65px 0',
	alignItems: 'flex-start',
});

const Item = styled('div', {
	textAlign: 'center',
	width: '350px',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '9px',

	'&>img': {
		display: 'flex',
		flexDirection: 'row',
		margin: '0 auto',

		height: '180px',
		width: '350px',

		objectFit: 'contain',
	},

	'&>h3': {
		color: '$brand',

		fontWeight: '700',
		fontSize: '16px',
		lineHeight: '23px',

		margin: 0,
	},

	'&>p': {
		padding: '7px 20px',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '20px',
		borderRadius: '20px',
		background: '#F8F8F8',

		width: '200px',
		margin: '0 auto',
	},

	'&>span': {
		color: '$black',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '17px',

		width: '200px',
		margin: '0 auto',
	},
});

export default function Youtube() {
	return (
		<BaseContainer>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<div className={invertedTheme}>
					<Heading>
						TV광고 보다 높은 효율 <span>“유튜브”</span>
					</Heading>
					<Details>
						크리에이터 <span>섭외부터 광고 집행</span>까지!
					</Details>
				</div>

				<Group css={{marginTop: '100px'}}>
					<Item>
						<img src={YoutubeFiveImage} alt='' />
						<h3>인스트림 광고</h3>
						<p>건너뛰기 가능</p>
						<span>
							시청자가 동영상을 30초 이상 시청하거나
							상호작용이 발생하면 비용 지출
						</span>
					</Item>
					<Item>
						<img src={Youtube15Image} alt='' />
						<h3>인스트림 광고</h3>
						<p>건너뛰기 불가능</p>
						<span>
							15초 이내 영상, 노출 수 기준으로 비용 지출
						</span>
					</Item>
					<Item>
						<img src={YoutubePlaylistImage} alt='' />
						<h3>인피드 동영상 광고</h3>
						<p>디스커버리 광고</p>
						<span>
							검색 결과 탭 근처 혹은 추천 동영상 목록 등에
							나타나는 광고 <br /><br />
							클릭 후 시청 기준으로 비용 지출
						</span>
					</Item>
					<Item>
						<img src={YoutubeSixImage} alt='' />
						<h3>범퍼 광고</h3>
						<p>광범위한 고객에게 도달하고자 할 때 추천</p>
						<span>
							6초 이하의 아주 짧은 광고 <br /><br />
							노출 수 기준으로 비용 지출
						</span>
					</Item>
					<Item>
						<img src={YoutubeSearchImage} alt='' />
						<h3>아웃스트림 광고</h3>
						<p>도달 범위 확장으로 더 많은 고객에게 도달하고자 할 때 추천</p>
						<span>
							Google 동영상 파트너에서 운영하는
							웹사이트 및 앱에서만 게재
							(YouTube 사용 X) <br /><br />
							조회가능 1000회 노출 기준으로
							비용 지출 <br />
							(사용자가 2초 이상 영상을 본 경우)
						</span>
					</Item>
					<Item>
						<img src={YoutubeAdImage} alt='' />
						<h3>마스트헤드 광고</h3>
						<p>단기간 내 잠재 고객에게 인지도를 높여 도달하고자 할 때 추천</p>
						<span>
							와이드 스크린 또는 16:9 비율로
							상단에 소리없이 자동 재생되는 영상
							<br /><br />
							1000회 노출 기준으로 비용 지출
							(예약방식으로만 제공)
						</span>
					</Item>
				</Group>
			</ContentContainer>
		</BaseContainer>
	);
}
