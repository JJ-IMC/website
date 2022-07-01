import {ContentContainer} from '~/styles/components/containers';
import {OutlinedText} from '~/styles/components/texts';
import {Navigation} from '~/styles/layouts/navigation';

export default function IndexPage() {
	return (
		<ContentContainer>
			<Navigation />
			<OutlinedText>
				Hello
			</OutlinedText>
		</ContentContainer>
	);
}
