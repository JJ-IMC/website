import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {Navigation} from '~/styles/layouts/navigation';
import {styled} from '~/styles/provider';
import Footer from '../index/footer';

const Inner = styled('div', {
	padding: '100px 0',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '15px',
});

const Header = styled('h2', {
	color: '$brand',

	fontWeight: '900',
	fontSize: '40px',
	lineHeight: '60px',

	textAlign: 'center',

	'&>h3': {
		color: '$black',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '26px',
	},
});

const Description = styled('p', {
	color: '$black',

	fontWeight: '300',
	fontSize: '16px',
	lineHeight: '24px',
	textAlign: 'center',

	maxWidth: '500px',
	margin: '0 auto',
});

const ContactBox = styled('div', {
	minWidth: '80%',
	maxWidth: '800px',
	padding: '40px',
	margin: '50px auto',

	boxShadow: '0px 4px 50px rgba(0,0,0,.08)',
	borderRadius: '20px',
});

const ContactButton = styled('button', {
	width: '100%',
	borderRadius: '10px',
	padding: '15px',
	textAlign: 'center',
	color: '$white',
	background: '$brand',
	border: 'none',
	cursor: 'pointer',
});

export default function ContactPage() {
	const handleContactButton = () => {
		window.open('mailto:contact@jjimc.net');
	};

	return (
		<BaseContainer>
			<ContentContainer>
				<Navigation />
				<Inner>
					<Header>
            CONTACT US
						<h3>
              소중한 시간을 내어 문의주셔서 감사합니다.
						</h3>
					</Header>
					<Description>
						{/* 소중한 시간을 내어 문의주셔서 감사합니다.
						<br /><br />
            하기 문항을 최대한 구체적으로 적어주시면 마케팅 효과는 더욱 높아집니다.
            적어주신 답변을 통해 브랜드 맞춤형 담당자가 개별 연락을 드리고 있으며
            답변을 토대로 정성껏 검토를 마친 후 24시간 이내로 연락드리겠습니다. */}

            현재는 이메일(contact @jjimc.net) 또는 유선 상(1800-5704)로만 문의를 받고 있습니다.
						<br /><br />
            담당자님의 회사 및 직책과 이름, 회신 연락처를 포함한 인적 사항과
            과거 마케팅 이력 및 예산을 함께 작성해주시면 브랜드 맞춤형 담당자가 24시간 이내에
            정성껏 검토를 마친 후 개별 연락을 드리고 있습니다.
					</Description>

					<ContactBox>
						<ContactButton onClick={handleContactButton}>
              상담 신청하기
						</ContactButton>
					</ContactBox>
				</Inner>
			</ContentContainer>
			<Footer />
		</BaseContainer>
	);
}
