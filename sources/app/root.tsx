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
]);

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
				{
					// https://remix.run/docs/en/v1/guides/styling#css-in-js-libraries
					typeof document === 'undefined'
						? '__STYLES__'
						: null
				}
			</head>
			<body>
				<Talkr languages={{en, ko}} defaultLanguage='en'>
					<Outlet />
				</Talkr>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
