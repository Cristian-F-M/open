import { open } from '@./index'
import pupa from 'pupa'
import { openingMessage } from '@/constants'
import { DOCS_URL, helpMessage } from '@/constants/help'

export function printHelp() {
	console.log(helpMessage)
}

export function printDocs() {
	console.log(pupa(openingMessage, { dir: DOCS_URL }))
	open(DOCS_URL)
}