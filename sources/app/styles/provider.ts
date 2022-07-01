import {createStitches} from '@stitches/react';

export const {styled, createTheme, getCssText} = createStitches({
	theme: {
		colors: {
			white: '#fff',
			black: '#000',

			brand: '#3B63F2',
		},
		fonts: {
			sansSerif: 'Poppins, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
			serif: 'Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
			mono: 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
		},
	},
});
