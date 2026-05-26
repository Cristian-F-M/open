import { exec, spawn } from 'node:child_process'
import { info } from 'node:console'
import pc from 'picocolors'
import updateNotifier from 'update-notifier'
import { error, success } from '@/utils/logger'

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

export function indent(text: string, spaces = 2) {
	const pad = ' '.repeat(spaces)

	return text
		.split('\n')
		.map((line) => pad + line)
		.join('\n')
}

export async function selfUpdate() {
	const pkg = await import('@./package.json')

	const notifier = updateNotifier({ pkg })
	const { latest, current } = await notifier.fetchInfo()

	if (latest === current) {
		success('Package is already up to date')
		return
	}

	info('Upgrading package...\n')
	await updateCli()
	success(`Package upgraded successfully to ${pc.underline(pc.green(`v${latest}`))}`)
	process.exit(0)
}

export async function updateCli() {
	const pkg = await import('@./package.json')
	const { promise, resolve, reject } = Promise.withResolvers<void>()

	const child = spawn('npm', ['install', '-g', pkg.name], {
		shell: true,
		stdio: 'pipe'
	})

	child.stdout.on('data', (data) => {
		const text = `${data.toString().trim()}\n`
		info(`[npm]: ${text}`)
	})

	child.stderr.on('data', (data) => {
		const text = `${data.toString().trim()}\n`
		error(`[npm error]: ${text}`)
	})

	child.on('close', (code) => {
		if (code === 0) {
			resolve()
		} else reject(new Error(`Update failed with code ${code}`))
	})

	child.on('error', (err) => {
		error(err.message)
	})

	return promise
}