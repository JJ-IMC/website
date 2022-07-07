import Moto from './moto';
import Features from './features';
import Intermediate from './intermediate';
import Main from './main';

export default function IndexPage() {
	return (
		<>
			<Main />
			<Intermediate />
			<Features />
			<Moto />
		</>
	);
}
