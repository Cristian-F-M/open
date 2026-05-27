import { exec } from 'node:child_process'

export function openExplorer(path: string) {
	const platform = process.platform
	let command = 'xdg-open'

	if (platform === 'win32') command = 'explorer'
	if (platform === 'darwin') command = 'open'

	exec(`${command} "${path}"`)
}

export function openNavigator(url: string) {
	const platform = process.platform
	let command = 'xdg-open'

	if (platform === 'win32') command = 'start'
	if (platform === 'darwin') command = 'open'

	exec(`${command} ${url}`)
}