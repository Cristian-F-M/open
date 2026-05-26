# @cmorales_/open

If you need to open a explorer or open a web from the terminal, It is your package.


### Global Installation (Recommended)

```bash
npm install -g @cmorales_/open
# or
pnpm add -g @cmorales_/open
# or
bun add -g @cmorales_/open
```

### Using `npx`

```bash
npx @cmorales_/open <path>
```


## Usage

The basic syntax is:

```bash
open <path>
```

Where `<path>` describes the folder, file, or website you want to target.

### Key Commands

#### 1. Basic Navigation
To open any folder, pass its path as the primary argument.
- `open ./src` -> Opens the `src` directory.
- `open --path ./src` -> Alternative syntax using the full flag (or use the `-p ./src` shortcut).

#### 2. System Utilities
Access help, documentation, or maintain your package directly from the CLI.
- `open --help` -> Shows the help message with all available options (shortcut: `-h`).
- `open --docs` -> Launches the official documentation website (shortcut: `-d`).
- `open --upgrade` -> Upgrades the package to the latest version.

### Key Features

#### 1. Default Directory
If you leave the path empty, it automatically defaults to your current working directory.
- `open` -> Opens the folder you are currently working on in the terminal.

#### 2. Relative Navigation
You can use standard relative paths to navigate through your file system.
- `open ../src` -> Moves up to the parent directory and opens the `src` folder inside it.

#### 3. Absolute Paths
It supports full system paths for direct and immediate access to any location.
- `open C://users` -> Directly opens the specified system folder.

#### 4. Open Files
It is not just for folders; you can also target specific files.
- `open ./index.ts` -> Opens the file using your system's default application, simulating a double-click.


## About the Author

Created by **Cristian Morales**.

- **GitHub:** [Cristian-F-M](https://github.com/Cristian-F-M)
- **Twitter:** [@Morales_M20](https://x.com/Morales_M20)

## Support

If you find this tool useful, you can support my work!

<a href="https://www.buymeacoffee.com/cmorales" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>