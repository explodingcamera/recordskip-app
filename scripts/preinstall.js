const pkg = require('./../package.json');

function red(text) {
	return '\x1b[31m' + text + '\x1b[0m';
}

function cyan(text) {
	return '\x1b[36m' + text + '\x1b[0m';
}

function yellow(text) {
	return '\x1b[33m' + text + '\x1b[0m';
}

/**
 * Do NOT allow using `npm` as package manager.
 */
if (process.env.npm_execpath.indexOf('yarn') === -1) {
	console.log(red('*** recordskip uses yarn for package management ***'), '\n');
	console.log(yellow('To install all packages:'));
	console.log(cyan('$'), 'yarn', '\n');
	console.log(yellow('To install a new (runtime) package to "dependencies":'));
	console.log(cyan('$'), 'yarn add --exact [package_name@version]', '\n');
	console.log(
		yellow('To install a new (toolset) package to "devDependencies":'),
	);
	console.log(cyan('$'), 'yarn add --dev --exact [package_name@version]', '\n');
	console.log(yellow('To upgrade a package:'));
	console.log(cyan('$'), 'yarn upgrade --exact [package_name@version]', '\n');
	console.log(yellow('To remove a package:'));
	console.log(cyan('$'), 'yarn remove [package_name]', '\n');
	console.log(
		yellow('For detailed instructions, see'),
		cyan(pkg.homepage + '#installation'),
		'\n',
	);
	process.exit(1);
}
