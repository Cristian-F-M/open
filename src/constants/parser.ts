import type { ParseArgsConfig } from 'node:util'

export const parserConfig = {
	args: process.argv.slice(2),
	strict: true,
	allowPositionals: true,
	options: {
		path: {
			type: 'string',
			short: 'p',
			default: './'
		},
		upgrade: {
			type: 'boolean',
			default: false
		},
		docs: {
			type: 'boolean',
			default: false,
			short: 'd'
		},
		help: {
			type: 'boolean',
			short: 'h'
		}
	}
} satisfies ParseArgsConfig