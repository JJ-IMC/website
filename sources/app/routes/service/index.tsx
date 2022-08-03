import Footer from '../index/footer';
import Cm from './cm';
import Main from './main';
import Sns from './sns';
import Video from './video';
import Website from './website';

export default function ServicePage() {
	return (
		<>
			<Main />
			<Sns />
			<Cm />
			<Website />
			<Video />
			<Footer />
		</>
	);
}
