import path from 'node:path'
import { openExplorer, openNavigator } from '@/utils'

/**
 * Opens a specific path, file, or executes CLI commands.
 *
 * @param {string} url - The target path, file, or command argument.
 *
 * @example
 * // Usage:
 * // COMMAND            DESCRIPTION              EXAMPLE                  SHORTCUT
 * // open <path>        Open the path            (e.g., open ./src)
 * // open --path <path> Open the path            (e.g., open ./src)       -p <path>
 * // open --help        Show this message        (e.g., open --help)      -h
 * // open --docs        Open the documentation   (e.g., open --docs)      -d
 * // open --upgrade     Upgrade the package      (e.g., open --upgrade)
 *
 * @example
 * // Features:
 * // Default directory   - Opens the current folder if left empty (e.g., open).
 * // Relative navigation - Use ../ to move to the parent directory (e.g., open ../src).
 * // Absolute paths      - Supports full system paths for direct access (e.g., open C://users).
 * // Open files          - Opens files using the system default application (e.g., open ./index.ts).
 */

export function open(url: string) {
	if (['http', 'www'].some((s) => url.startsWith(s))) {
		openNavigator(url)
		return
	}

	const dir = path.resolve(url)

	openExplorer(dir)
}