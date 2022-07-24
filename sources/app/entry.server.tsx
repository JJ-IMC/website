import type {EntryContext} from '@remix-run/cloudflare';
import {RemixServer} from '@remix-run/react';
import {renderToString} from 'react-dom/server';
import {getCssText} from './styles/provider';

const prepend = `
`.trim();

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const markup = renderToString(
		<RemixServer context={remixContext} url={request.url} />,
	)
		.replace('__PREPEND__', prepend)
		.replace('__STYLES__', `<style id="stitches">${getCssText() || ''}</style>`);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
