import util from 'node:util'
import boxen from 'boxen'
import pupa from 'pupa'
import updateNotifier from 'update-notifier'
import { openingMessage } from '@/constants'
import { needUpdateMessage } from '@/constants/help'
import { parserConfig } from '@/constants/parser'
import { selfUpdate } from '@/utils/cli/'
import { printDocs, printHelp } from '@/utils/cli/help'
import { log } from '@/utils/cli/logger'
import { open } from '.'
import pkg from './package.json'

const notifier = updateNotifier({
	pkg,
	updateCheckInterval: 0
})

let fetched = false
process.on('beforeExit', async () => {
	if (fetched) return

	const { latest, current } = await notifier.fetchInfo()

	fetched = true

	if (current === latest) return

	console.log(
		boxen(pupa(needUpdateMessage, { latest, current }), {
			padding: 1,
			margin: 1,
			textAlignment: 'center',
			borderColor: 'yellow',
			borderStyle: 'round'
		})
	)
})

async function main() {
	try {
		const { values, positionals } = util.parseArgs(parserConfig)

		if (values.upgrade) {
			await selfUpdate()
			process.exit(0)
		}

		if (values.help) return printHelp()
		if (values.docs) return printDocs()
		if (values.version) {
			log(`${pkg.name} ${pkg.version}`)
			return
		}

		const rawDir = positionals.at(0) || (values.path as string)

		console.log(pupa(openingMessage, { dir: rawDir }))
		open(rawDir)
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message)
			return
		}

		console.error('Unespected error has ocurred')

		printHelp()
		return
	}
}

main()