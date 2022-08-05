import Footer from '../index/footer';
import Ad from './ad';
import Cm from './cm';
import Main from './main';
import Sns from './sns';
import Video from './video';
import Website from './website';
import Youtube from './youtube';

export default function ServicePage() {
	return (
		<>
			<Main />
			<Sns />
			<Cm />
			<Website />
			<Video />
			<Youtube />
			<Ad />
			<Footer />
		</>
	);
}
