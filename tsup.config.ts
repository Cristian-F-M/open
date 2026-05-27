import { defineConfig } from 'tsup'

export default defineConfig([
	{
		entry: ['cli.ts'],
		format: ['esm'],
		banner: { js: '#!/usr/bin/env node' },
		dts: false,
		splitting: false,
		clean: true,
		minify: true
	},
	{
		entry: ['index.ts'],
		format: ['esm', 'cjs'],
		dts: true,
		splitting: false,
		clean: true
	}
])