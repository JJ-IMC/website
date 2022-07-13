import Moto from './moto';
import Features from './features';
import Intermediate from './intermediate';
import Main from './main';
import World from './world';
import Advantages from './advantages';

export default function IndexPage() {
	return (
		<>
			<Main />
			<Intermediate />
			<Features />
			<Moto />
			<World />
			<Advantages />
		</>
	);
}
