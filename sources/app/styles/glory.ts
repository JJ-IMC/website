import {create, prefixer, virtual} from 'glory/dist';

const glory = create({
	sh: typeof document === 'object'
		? document.getElementById('prestyle') as HTMLStyleElement
		: undefined,
});

virtual(glory);
prefixer(glory);

export default glory;
