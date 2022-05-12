import yargs from 'yargs';
import { getVersion, downloadInstaller, extractInstaller } from './utils'

yargs
    .command(
        'get-version', 'Get latest bilibili version number', async () => {
            const version = await getVersion();
            console.log(version);
        })
    .command(
        'download', 'Download latest windows installer', () => {
            downloadInstaller();
        })
    .command(
        'extract', 'Extract app.asar from installer.exe', () => {
            extractInstaller();
        })
    .argv
