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

export default function Main() {
	return (
		<BaseContainer className={invertedTheme}>
			<ContentContainer>
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
			</ContentContainer>
		</BaseContainer>
	);
}
