import {
	create,
	prefixer,
	virtual,
} from 'glory/dist';
// @ts-expect-error
import globalAddon from 'glory/dist/global';

const glory = create({
	sh: typeof document === 'object'
		? document.getElementById('prestyle') as HTMLStyleElement
		: undefined,
});

virtual(glory);
prefixer(glory);

// Global styles
globalAddon(glory);

glory.global({
	lineHeight: '1.65em',
	wordBreak: 'keep-all',
	boxSizing: 'border-box',
}, ['body']);

glory.global({
	margin: 0,
}, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']);

export default glory;
