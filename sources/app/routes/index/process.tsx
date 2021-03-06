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
						heading='????????? ?????????'
					/>
					<ProcessItem
						imageSource={SecondVectorImage}
						heading='??? ?????? ????????? ??????'
					/>
					<ProcessItem
						imageSource={ThirdVectorImage}
						heading='????????? ?????? ??? ??????'
					/>
					<ProcessItem
						imageSource={FourthVectorImage}
						heading='????????? ????????? ????????????'
					/>
				</ProcessList>
			</ContentContainer>
		</BaseContainer>
	);
}
