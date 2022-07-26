import type {FC} from 'react';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';
// Vectors
import FirstVectorImage from '~/../files/index/processes/first.svg';
import SecondVectorImage from '~/../files/index/processes/second.svg';
import ThirdVectorImage from '~/../files/index/processes/third.svg';
import FourthVectorImage from '~/../files/index/processes/fourth.svg';

const Heading = styled('h2', {
	margin: 0,

	fontWeight: '500',
	fontSize: '80px',
	lineHeight: '120px',

	color: '#000B33',
	textShadow: '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',

	'@media only screen and (max-width: 1000px)': {
		fontSize: '40px',
		lineHeight: '60px',
	},

	'&>span': {
		color: '$white',
		textShadow: 'none',
	},
});

const ProcessList = styled('ol', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	listStyle: 'none',

	padding: 0,
	margin: 0,
	marginTop: '100px',

	'@media only screen and (max-width: 1000px)': {
		flexDirection: 'column',
	},
});

const ProcessItemContainer = styled('li', {
	listStyle: 'none',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',

	textAlign: 'center',
});

const ProcessItemImage = styled('img', {
	margin: '30px 0',
	height: '100px',
	width: '100%',
	objectFit: 'contain',

	'@media only screen and (max-width: 1000px)': {
		height: '62px',
	},
});

const ProcessItemHeading = styled('h3', {
	color: '$white',

	fontSize: '25px',
	fontWeight: '300',
	lineHeight: '36px',
});

const ProcessItemDecoration = styled('div', {
	display: 'inline',

	width: '20px',
	height: '20px',
	backgroundColor: '$white',
	borderRadius: '50%',
	margin: '0 auto',
	marginTop: '5px',
	marginBottom: '10px',
});

interface ProcessItemProps {
	imageSource: string,
	heading: string,
}

const ProcessItem: FC<ProcessItemProps> = ({
	imageSource,
	heading,
}) => (
	<ProcessItemContainer>
		<ProcessItemImage src={imageSource} alt='vector' />
		<ProcessItemDecoration />
		<ProcessItemHeading>
			{heading}
		</ProcessItemHeading>
	</ProcessItemContainer>
);

export default function Process() {
	return (
		<BaseContainer css={{background: '#000B33'}}>
			<ContentContainer css={{background: 'inherit', padding: '110px 16px'}}>
				<Heading>
					OUR<br />
					<span>PROCESS</span>
				</Heading>

				<ProcessList>
					<ProcessItem
						imageSource={FirstVectorImage}
						heading='맞춤형 컨설팅'
					/>
					<ProcessItem
						imageSource={SecondVectorImage}
						heading='각 분야 전문팀 배치'
					/>
					<ProcessItem
						imageSource={ThirdVectorImage}
						heading='캠페인 진행 및 보고'
					/>
					<ProcessItem
						imageSource={FourthVectorImage}
						heading='빠르고 정확한 커뮤니티'
					/>
				</ProcessList>
			</ContentContainer>
		</BaseContainer>
	);
}
