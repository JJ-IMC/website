import type {LinksFunction, MetaFunction} from '@remix-run/cloudflare';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
// Styles
import modernNormalize from 'modern-normalize/modern-normalize.css';
import globalStyle from './styles/statics/global.css';
// Internalization
import {Talkr} from 'talkr';
import en from '../internalization/en.json';
import ko from '../internalization/ko.json';

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
