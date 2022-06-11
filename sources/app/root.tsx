import type {MetaFunction} from '@remix-run/cloudflare';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import {Talkr} from 'talkr';
import en from '../internalization/en.json';
import ko from '../internalization/ko.json';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'JJ Integrated Marketing Communicat',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
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
