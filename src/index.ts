import { Command } from 'commander';
const program = new Command();
import { askForFolderName, askForProjectLanguage, createProject, getPackageVersion, getProjectPackageInfo, isFortProject } from "@/helpers";
import { handleDeploy, handleFileAdd, handleStart } from '@/handlers';

program.version(getPackageVersion(), '-v, --version');

program.command('dev').description('Start development server').action(() => {
    if (isFortProject()) {
        handleStart();
    }
});

program.command('deploy').description('Create build for deployment').action(() => {
    if (isFortProject()) {
        handleDeploy('');
    }
});

program.command('add').description('Add component').action(() => {
    if (isFortProject()) {
        const packageInfo = getProjectPackageInfo();
        const language = packageInfo && packageInfo.project && packageInfo.project.language;
        handleFileAdd(
            language
        );
    }
});

program.command('init').description('Initiate a new project').action(async () => {
    const language = await askForProjectLanguage();
    const folderName = await askForFolderName();
    createProject(language, folderName);
})

const parsed = program.parse(process.argv);

// console.log('parsed', parsed);

// processCommand(program.opts());
