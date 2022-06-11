import glory from '~/styles/glory';
import {container, content} from '~/styles/fragments/frame';
import heroImage from '~/statics/andrew-neel-cckf4TsHAuw-unsplash.png';
import {useT} from 'talkr';

const cover = glory.virtual({
	minHeight: '100vh',
	background: 'black',
});

const hero = glory.virtual({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	justifyContent: 'center',

	minWidth: '100%',
	minHeight: '100vh',
	padding: '32px',

	color: 'white',
	textAlign: 'right',
});

const image = glory.virtual({
	position: 'absolute',
	zIndex: '1',

	objectFit: 'cover',
	width: '450px',
	height: '450px',
	borderRadius: '50%',

	'@media (max-width: 750px)': {
		width: '350px',
		height: '350px',
	},

	'@media (max-width: 450px)': {
		width: '400px',
		height: '400px',
	},
});

const texts = {
	strong: glory.virtual({
		position: 'absolute',
		zIndex: '2',
		fontWeight: 300,
		fontSize: '128px',

		'@media (max-width: 750px)': {
			fontSize: '88px',
		},

		'@media (max-width: 450px)': {
			fontSize: '72px',
		},
	}),
	outlined: glory.virtual({
		color: 'black',
		textShadow: '0 1px 0 white, 0 -1px 0 white, 1px 0 0 white, -1px 0 0 white',
	}),
	emphasized: glory.virtual({
		color: '#3B63F2',
	}),
};

const positions = {
	first: glory.virtual({
		top: '20%',
		right: '20px',
	}),
	second: glory.virtual({
		top: '45%',
		left: '20px',

		'@media (max-width: 750px)': {
			left: '5px',
		},
	}),
	third: glory.virtual({
		top: '65%',
		right: '25px',
	}),

	image: glory.virtual({
		top: '20%',
		left: '80px',

		'@media (max-width: 750px)': {
			top: '25%',
			left: '30px',
		},

		'@media (max-width: 450px)': {
			top: '20%',
			left: '-80px',
		},
	}),
};

const header = {
	container: glory.virtual({
		position: 'absolute',
		right: '20px',
		top: '38.7%',
		zIndex: 2,
	}),

	primary: glory.virtual({
		fontWeight: 400,
		fontSize: '20px',
	}),
	secondary: glory.virtual({
		fontWeight: 100,
		fontSize: '20px',
	}),
	third: glory.virtual({
		color: 'lightgray',
		fontWeight: 300,
		fontSize: '16px',
	}),
};

const button = {
	base: glory.virtual({
		color: 'white',
		padding: '10px 18px',
		margin: '4px 0',
		border: 'none',
		borderRadius: '99vw',

		cursor: 'pointer',
		transition: 'background ease .3s',

		'+button': {
			marginLeft: '8px',
		},
	}),
	primary: glory.virtual({
		background: '#3B63F2',

		':hover': {
			background: '#2E4EBE',
		},
	}),
	secondary: glory.virtual({
		background: 'gray',

		':hover': {
			background: 'lightgray',
		},
	}),
};

export default function Index() {
	const {T: t, locale, setLocale} = useT();

	const handleMailLinker = () => {
		window.location.href = 'mailto:contact@jjimc.net';
	};

	const handleUpdateLanguage = () => {
		if (locale === 'ko') {
			setLocale('en');
		} else {
			setLocale('ko');
		}
	};

	return (
		<div className={cover}>
			<div className={container + content}>
				<div className={hero}>
					<strong className={texts.strong + texts.outlined + positions.first}>
						{t('index.make')}
					</strong>
					<strong className={texts.strong + texts.emphasized + positions.second}>
						{t('index.your')}
					</strong>
					<strong className={texts.strong + texts.outlined + positions.third}>
						{t('index.brand')}
					</strong>

					<div className={header.container}>
						<h1 className={header.primary}>
							JJ Integrated Marketing Communicat
						</h1>
						<h2 className={header.secondary}>{t('index.company.description')}</h2>
						<p className={header.third}>*{t('index.company.message')}</p>

						<button className={button.base + button.secondary} onClick={handleUpdateLanguage}>{t('index.switchLanguage')}</button>
						<button className={button.base + button.primary} onClick={handleMailLinker}>{t('index.contact')}</button>
					</div>

					<img className={image + positions.image} src={heroImage} alt='professionalism' />
				</div>
			</div>
		</div>
	);
}
