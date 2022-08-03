import DiskImage from '~/../files/service/video/disk.svg';
import GoggleImage from '~/../files/service/video/goggle.svg';
import PrinterImage from '~/../files/service/video/printer.svg';
import {BaseContainer, ContentContainer} from '~/styles/components/containers';
import {CmIconItem} from './cm';
import {Details, Heading, IconItemGroup} from './sns';

export default function Video() {
	return (
		<BaseContainer css={{background: '#111B3F'}}>
			<ContentContainer css={{position: 'relative', overflow: 'hidden', background: 'transparent', padding: '130px 16px'}}>
				<Heading>
					좋은 기획, 좋은 영상 <span>“영상 제작”</span>
				</Heading>
				<Details>
					글보다 <span>영상이 편한 시대</span>
				</Details>

				<IconItemGroup>
					<CmIconItem>
						<div>
							<img src={DiskImage} alt='disk' />
						</div>
						<p>
							트렌디하고<br />
							젊은 감각
						</p>
					</CmIconItem>
					<CmIconItem>
						<div>
							<img src={PrinterImage} alt='printer' />
						</div>
						<p>
							기획부터<br />
							영상제작까지
						</p>
					</CmIconItem>
					<CmIconItem>
						<div>
							<img src={GoggleImage} alt='goggle' />
						</div>
						<p>
							2030 팀원들이 만드는<br />
							‘요즘 영상’
						</p>
					</CmIconItem>
				</IconItemGroup>
			</ContentContainer>
		</BaseContainer>
	);
}
