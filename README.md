# Number to words CLI
CLI tool to convert integer to word string

## Install
Not currently available via npm so please follow these steps:

1. Clone this repo
2. `yarn install` or `npm install` to install dependencies
3. `yarn build` or `npm run build` to build js output files
4. `sudo npm link` or `sudo npm link word-num` from within the main directory to symlink the binary 

**Note:** `yarn link` does not link binaries as expected hence package-lock file emmission has been disabled for `yarn` users . Please turn back on if package-lock file is needed.

## Usage

```shell
word-num convert <number>
```
Use `word-num --help` for more info 
