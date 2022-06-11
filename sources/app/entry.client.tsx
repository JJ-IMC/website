import {RemixBrowser} from '@remix-run/react';
import {hydration} from 'glory/dist';
import {hydrate} from 'react-dom';
import glory from './styles/glory';

hydration(glory);
hydrate(<RemixBrowser />, document);
