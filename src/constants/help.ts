import pkg from '@./package.json'
import cfonts from 'cfonts'
import columnify from 'columnify'
import * as pc from 'picocolors'
import { indent } from '@/utils'

export const DOCS_URL =
	'https://github.com/Cristian-F-M/open?tab=readme-ov-file#cmorales_open'

const renderedTitle = cfonts.render('open', {
	font: 'block',
	colors: ['system', 'white']
})

export const TITLE = renderedTitle ? renderedTitle.string : 'open'

const columnifyOptions = {
	showHeaders: true,
	columnSplitter: '    '
} satisfies columnify.GlobalOptions

const usageData = [
	{
		command: 'open <path>',
		description: 'Open the path',
		example: '(e.g. open ./src)'
	},
	{
		command: 'open --path <path>',
		shortcut: '-p <path>',
		description: 'Open the path',
		example: '(e.g. open ./src)'
	},
	{
		command: 'open --help',
		description: 'Show this message',
		example: '(e.g. open --help)',
		shortcut: '-h'
	},
	{
		command: 'open --docs',
		description: 'Open the documentation',
		example: '(e.g. open --docs)',
		shortcut: '-d'
	},
	{
		command: 'open --upgrade',
		description: 'Upgrade the package',
		example: '(e.g. open --upgrade)'
	}
]

const featuresData = [
	{
		feat: 'Default directory',
		description: 'Opens the current folder if the path is left empty',
		example: '(e.g., open).'
	},
	{
		feat: 'Relative navigation',
		description: 'Use ../ to move up to the parent directory',
		example: '(e.g., open ../src)'
	},
	{
		feat: 'Absolute paths',
		description: 'Supports full system paths for direct access',
		example: '(e.g., open C://users).'
	},
	{
		feat: 'Open files',
		description: 'Opens files using the system default application.',
		example: '(e.g., `open ./index.ts`)'
	}
]

export const helpMessage = `
${TITLE}
v${pkg.version}
If you need to open a explorer or open a web from the terminal, It is your package.

${pc.green(pc.bold('Usage'))}:

${indent(columnify(usageData, columnifyOptions), 4)}


${pc.green(pc.bold('Features'))}:

${indent(columnify(featuresData, { ...columnifyOptions, showHeaders: false }), 4)}
	


${pc.green(pc.bold('Author'))}:
  Cristian Morales (${pc.blue('@cmorales')})
  GitHub: https://github.com/Cristian-F-M
  X: https://x.com/Morales_M20


${pc.green(pc.bold('Support'))}:
  If you find this useful, support my work:
  https://www.buymeacoffee.com/cmorales
`

export const needUpdateMessage = `✨ New version available: ${pc.gray('{current}')} → ${pc.underline(pc.bold(pc.green('{latest}')))}
run ${pc.bold(pc.cyan('open --upgrade'))} to update`