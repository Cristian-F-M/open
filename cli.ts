#!/usr/bin/env node
import pkg from '@./package.json'
import path from 'node:path'
import util from 'node:util'
import boxen from 'boxen'
import pupa from 'pupa'
import updateNotifier from 'update-notifier'
import { openingMessage } from '@/constants'
import { needUpdateMessage } from '@/constants/help'
import { parserConfig } from '@/constants/parser'
import { selfUpdate } from '@/utils'
import { printDocs, printHelp } from '@/utils/help'
import { open } from '.'

const notifier = updateNotifier({
	pkg,
	updateCheckInterval: 0
})

process.on('beforeExit', async (code) => {
	const { latest, current } = await notifier.fetchInfo()

	console.log(
		boxen(pupa(needUpdateMessage, { latest, current }), {
			padding: 1,
			margin: 1,
			textAlignment: 'center',
			borderColor: 'yellow',
			borderStyle: 'round'
		})
	)
	process.exit(code)
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

		const rawDir = positionals.at(0) || (values.path as string)
		const dir = path.resolve(rawDir)

		console.log(pupa(openingMessage, { dir: rawDir }))
		open(dir)
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