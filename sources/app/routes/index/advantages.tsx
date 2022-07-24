import type {FC} from 'react';
import {ContentContainer} from '~/styles/components/containers';
import {styled} from '~/styles/provider';
// Vectors
import FirstVectorImage from '~/../files/index/advantages/first_vector.svg';
import SecondVectorImage from '~/../files/index/advantages/second_vector.svg';
import ThirdVectorImage from '~/../files/index/advantages/third_vector.svg';

const Heading = styled('h2', {
	color: '$white',
	textShadow: '-1px 1px 0 #3B63F2, 1px 1px 0 #3B63F2, 1px -1px 0 #3B63F2, -1px -1px 0 #3B63F2',
	textAlign: 'center',

	fontSize: '120px',
	fontWeight: '500',
	lineHeight: '180px',
	margin: 0,
	padding: '65px 0',

	'&>span': {
		color: '$brand',
		textShadow: 'none',
	},
});

const AdvantageList = styled('ol', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	listStyle: 'none',
	padding: 0,
	margin: 0,
});

const AdvantageItemContainer = styled('li', {
	listStyle: 'none',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',

	textAlign: 'center',
});

const AdvantageItemImage = styled('img', {
	margin: '30px 0',
	height: '160px',
	objectFit: 'contain',
});

const AdvantageItemHeading = styled('h3', {
	color: '$brand',

	fontSize: '30px',
	fontWeight: '500',
	lineHeight: '45px',

	margin: '5px 0',
});

const AdvantageItemDescription = styled('p', {
	color: '#555555',

	fontSize: '18px',
	fontWeight: '400',
	lineHeight: '26px',

	margin: '5px 0',
});

interface AdvantageItemProps {
	imageSource: string,
	heading: string,
	description: string,
}

const AdvantageItem: FC<AdvantageItemProps> = ({
	imageSource,
	heading,
	description,
}) => (
	<AdvantageItemContainer>
		<AdvantageItemImage src={imageSource} alt='vector' />
		<AdvantageItemHeading>
			{heading}
		</AdvantageItemHeading>
		<AdvantageItemDescription>
			{description}
		</AdvantageItemDescription>
	</AdvantageItemContainer>
);

export default function Advantages() {
	return (
		<>
			<ContentContainer css={{padding: '100px 16px'}}>
				<Heading>
					THESE ARE<br />
					<span>OUR ADVANTAGES!</span>
				</Heading>

				<AdvantageList>
					<AdvantageItem
						imageSource={FirstVectorImage}
						heading='SENSE'
						description='깨어있는 감각'
					/>
					<AdvantageItem
						imageSource={SecondVectorImage}
						heading='PLANNING'
						description='무에서 유를 창조해내는 기획력'
					/>
					<AdvantageItem
						imageSource={ThirdVectorImage}
						heading='ABILITY'
						description='급변하는 흐름을 정확히 읽어내는 능력'
					/>
				</AdvantageList>
			</ContentContainer>
		</>
	);
}
