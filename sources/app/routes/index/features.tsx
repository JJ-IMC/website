import type {CSS} from '@stitches/react';
import type {FC} from 'react';
import {ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';

const Heading = styled('h3', {
	color: '$white',
	textShadow: '-1px 1px 0 #3B63F2, 1px 1px 0 #3B63F2, 1px -1px 0 #3B63F2, -1px -1px 0 #3B63F2',

	fontSize: '80px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '120px',
	margin: 0,
	marginTop: '80px',

	'&>span': {
		color: '$brand',
		textShadow: 'none',
	},

	position: 'relative',
	zIndex: 2,
});

const Vector = styled('svg', {
	position: 'absolute',
	top: 0,
});

const vectors = {
	First: styled(Vector, {
		marginTop: '250px',
		left: 0,
		marginLeft: '340px',
	}),
	Second: styled(Vector, {
		marginTop: '530px',
		right: 0,
		marginRight: '32px',
	}),
	Third: styled(Vector, {
		marginTop: '950px',
		left: 0,
		marginLeft: '300px',
	}),
};

const EntryOuter = styled('div', {
	position: 'absolute',
	top: 0,

	display: 'inline-block',
	borderTop: '$black 3px solid',
});

const EntryHeading = styled('h2', {
	display: 'inline-block',
	margin: 0,
	marginTop: '40px',

	fontSize: '35px',
	fontWeight: '700',

	color: '$brand',
	lineHeight: '50px',
});

const EntryContent = styled('p', {
	margin: 0,
	marginTop: '10px',

	fontSize: '24px',
	lineHeight: '35px',
});

interface IEntryProps {
  heading: string,
  content: string | Element,
  outerStyles: CSS,
}

const Entry: FC<IEntryProps> = ({heading, content, outerStyles}) => (
	<>
		<EntryOuter css={outerStyles}>
			<EntryHeading>{heading}</EntryHeading>
			<EntryContent>
				{
					typeof content === 'string'
						? content
							.split('\n')
							.map(fragment => (<span key={fragment.length}>{fragment}<br /></span>))
						: content
				}
			</EntryContent>
		</EntryOuter>
	</>
);

export default function Features() {
	return (
		<>
			<ContentContainer css={{position: 'relative', height: '1300px'}}>
				<article>
					<Heading>
						THIS IS<br />
						<span>JJIMC!</span>
					</Heading>
				</article>

				{/* Exported from Figma */}
				<vectors.First width='170' height='174' viewBox='0 0 170 174' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M170 74.6169L127.938 87L170 99.3779L126.197 99.2526L163.113 123.142L121.123 110.519L149.901 143.974L113.119 119.875L131.43 160.187L102.838 126.571L109.194 170.472L91.109 130.056L85 174L78.891 130.056L60.8063 170.472L67.1625 126.571L38.575 160.187L56.8813 119.875L20.0988 143.974L48.8768 110.519L6.88674 123.142L43.8032 99.2526L0 99.3779L42.0622 87L0 74.6169L43.8032 74.7421L6.88674 50.8578L48.8768 63.481L20.0988 30.0263L56.8813 54.1245L38.575 13.8129L67.1625 47.4294L60.8063 3.52237L78.891 43.9436L85 0L91.109 43.9436L109.194 3.52237L102.838 47.4294L131.43 13.8129L113.119 54.1245L149.901 30.0263L121.123 63.481L163.113 50.8578L126.197 74.7421L170 74.6169Z' fill='#BBCAFF' />
				</vectors.First>
				<vectors.Second width='218' height='231' viewBox='0 0 218 231' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M37.0334 0.890317L217.034 147.273L0.46953 230.221L37.0334 0.890317Z' fill='#3B63F2' />
				</vectors.Second>
				<vectors.Third width='129' height='153' viewBox='0 0 129 153' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect width='85.1362' height='164.408' rx='42.5681' transform='matrix(0.839069 0.544025 -0.542775 0.839878 73.2363 -16)' fill='#65E1F2' />
				</vectors.Third>

				<Entry
					heading='✨ 고객사가 있기에 우리가 존재합니다.'
					content='우리는 서로를 성장케하는 에너지를 가진 한 팀으로 이루어져 있어요.'
					outerStyles={{
						marginTop: '325px',
						right: 0,
						marginRight: '16px',
					}}
				/>
				<Entry
					heading='🏙️ 우리는 단순히 시대적 트렌드를 쫓지 않아요.'
					content={`정보 과잉 시대에 당신의 소리를 뚜렷이
많고 많은 브랜드 중 유일무이한 브랜드로 자리 잡을 수 있도록.`}
					outerStyles={{
						marginTop: '660px',
						left: 0,
						marginLeft: '16px',
					}}
				/>
				<Entry
					heading='📑 우리는 상호 간의 협력을 지향합니다.'
					content={`상생 가치를 통해 당사와 고객사 모두 만족할 수 있는
최적의 솔루션을 제안하여 최고의 결과물을 이루어냅니다.`}
					outerStyles={{
						marginTop: '1000px',
						right: 0,
						marginRight: '16px',
					}}
				/>
			</ContentContainer>
		</>
	);
}
