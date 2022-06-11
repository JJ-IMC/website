import type {EntryContext} from '@remix-run/cloudflare';
import {RemixServer} from '@remix-run/react';
import {renderToString} from 'react-dom/server';
import glory from './styles/glory';

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const markup = renderToString(
		<RemixServer context={remixContext} url={request.url} />,
	)
		.replace('__STYLES__', `<style id="prestyle">${glory.raw ?? ''}</style>`);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
