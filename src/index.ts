#! /usr/bin/env node
import { Command } from 'commander';
import { packageJSON } from 'utils/packageJson.js';
import { renderTitle } from 'utils/renderTitle.js';

(async () => {
	renderTitle();

	const program = new Command();

	program
		.name('my-node-app')
		.description('⚡️ Your ultimate CLI app.')
		.version(
			packageJSON.version,
			'-v, --version',
			'display the version number',
		);
})();
