import Footer from '../index/footer';
import Ad from './ad';
import Cast from './cast';
import Cm from './cm';
import Live from './live';
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
			<Cast />
			<Live />
			<Footer />
		</>
	);
}
