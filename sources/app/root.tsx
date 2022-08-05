import type {LinksFunction, MetaFunction} from '@remix-run/cloudflare';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useFetchers,
	useTransition,
} from '@remix-run/react';
// Styles
import modernNormalize from 'modern-normalize/modern-normalize.css';
import globalStyle from './styles/statics/global.css';
// Internalization
import {Talkr} from 'talkr';
import en from '../internalization/en.json';
import ko from '../internalization/ko.json';
// Progress bar
import NProgress from 'nprogress';
import nProgressStyles from 'nprogress/nprogress.css';
import {useEffect, useMemo} from 'react';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'JJ Integrated Marketing Communicat',
	viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => ([
	{
		rel: 'stylesheet',
		href: modernNormalize,
	},
	{
		rel: 'stylesheet',
		href: globalStyle,
	},
	{
		rel: 'stylesheet',
		href: nProgressStyles,
	},
	{
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
	},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
	},
]);

const insertions = {
	head: [
		'__STYLES__',
		'__PREPEND__',
	].join('\n'),
};

export default function App() {
	const transition = useTransition();
	const fetchers = useFetchers();

	const state = useMemo<'idle' | 'loading'>(
		() => {
			const states = [
				transition.state,
				...fetchers.map(fetcher => fetcher.state),
			];
			if (states.every(state => state === 'idle')) {
				return 'idle';
			}

			return 'loading';
		},
		[transition.state, fetchers],
	);

	useEffect(() => {
		if (state === 'loading') {
			NProgress.start();
		}

		if (state === 'idle') {
			NProgress.done();
		}
	}, [
		state,
		transition.state,
	]);

	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
				{
					// https://remix.run/docs/en/v1/guides/styling#css-in-js-libraries
					typeof document === 'undefined'
						? insertions.head
						: null
				}
			</head>
			<body>
				<Talkr languages={{en, ko}} defaultLanguage='ko'>
					<Outlet />
				</Talkr>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
