#!/usr/bin/env node

const commander = require("commander");
const {
    processCommand
} = require('./bin/app');

commander.option('new [folderName]', 'Create new project & put the content inside the specified folder').
option('start', 'start development server').
option('deploy [deploymentFolderName]', 'create build for deployment').
option('add', 'add the components').
parse(process.argv);

processCommand(commander);