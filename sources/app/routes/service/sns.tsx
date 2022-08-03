import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';
import MobileImage from '~/../files/service/sns/mobile.svg';
import EarthImage from '~/../files/service/sns/earth.svg';
import CheckImage from '~/../files/service/sns/check.svg';
import TopImage from '~/../files/service/sns/top.svg';
import BulbImage from '~/../files/service/sns/bulb.svg';

export const Heading = styled('h2', {
	fontWeight: '900',
	fontSize: '40px',
	lineHeight: '60px',

	color: '$white',

	'&>span': {
		color: '$brand',
	},

	marginTop: '100px',

	'@media only screen and (max-width: 400px)': {
		fontSize: '18px',
		lineHeight: '26px',
	},
});

export const Details = styled('p', {
	fontWeight: '400',
	fontSize: '18px',
	lineHeight: '26px',

	color: '$white',

	'&>span': {
		color: '$brand',
	},

	'@media only screen and (max-width: 400px)': {
		fontSize: '10px',
		lineHeight: '14px',
	},
});

export const Emphasis = styled('strong', {
	fontWeight: '400',
	fontSize: '24px',
	lineHeight: '35px',

	color: '$white',

	'&>span': {
		color: '$brand',
	},

	'@media only screen and (max-width: 400px)': {
		fontSize: '12px',
		lineHeight: '17px',
	},
});

export const IconItemGroup = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'start',
	gap: '25px 100px',

	marginTop: '130px',
});

export const IconItem = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '17px',

	'&>div': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',

		borderRadius: '50%',
		width: '120px',
		height: '120px',
		background: 'rgba(255,255,255,.2)',

		'@media only screen and (max-width: 400px)': {
			width: '70px',
			height: '70px',
		},

		'&>img': {
			width: '100%',
			height: '36px',

			margin: 'auto auto',

			'@media only screen and (max-width: 400px)': {
				height: '27px',
			},
		},

		margin: '0 auto',
	},

	'&>p': {
		width: '100%',
		textAlign: 'center',

		fontWeight: '700',
		fontSize: '18px',
		lineHeight: '26px',

		color: '$white',

		'&>span': {
			color: '$brand',
		},

		'@media only screen and (max-width: 400px)': {
			fontSize: '12px',
			lineHeight: '17px',
		},
	},
});

export default function Sns() {
	return (
		<BaseContainer css={{background: '#BBCAFF'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<Heading>
          사람을 믿고 산다 <span>“SNS 마케팅“</span>
				</Heading>
				<Details>
          인플루언서 섭외, 체험단, 기자단, 인기게시물 상위 노출
				</Details>
				<Emphasis>
          SNS는 마치 커다란 <span>‘백화점’</span>과도 같습니다.<br />
          여러 브랜드 가운데 <span>‘차별점’</span>이 있어야 살아남죠.
				</Emphasis>

				<IconItemGroup>
					<IconItem>
						<div>
							<img src={MobileImage} alt='mobile' />
						</div>
						<p>
              높은 <br /><span>파급력</span>
						</p>
					</IconItem>
					<IconItem>
						<div>
							<img src={EarthImage} alt='earth' />
						</div>
						<p>
              빠른 <br /><span>확산</span>
						</p>
					</IconItem>
					<IconItem>
						<div>
							<img src={CheckImage} alt='check' />
						</div>
						<p>
              즉각적인 <br /><span>반응</span>
						</p>
					</IconItem>
					<IconItem>
						<div>
							<img src={TopImage} alt='top' />
						</div>
						<p>
              신뢰도 <br /><span>상승</span>
						</p>
					</IconItem>
					<IconItem>
						<div>
							<img src={BulbImage} alt='bulb' />
						</div>
						<p>
              인지도 <br /><span>상승</span>
						</p>
					</IconItem>
				</IconItemGroup>
			</ContentContainer>
		</BaseContainer>
	);
}
