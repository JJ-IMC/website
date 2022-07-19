import Advantages from './advantages';
import Features from './features';
import Footer from './footer';
import Intermediate from './intermediate';
import Main from './main';
import Moto from './moto';
import Process from './process';
import World from './world';

export default function IndexPage() {
	return (
		<>
			<Main />
			<Intermediate />
			<Features />
			<Moto />
			<World />
			<Advantages />
			<Process />
			<Footer />
		</>
	);
}
