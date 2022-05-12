import shell from 'shelljs';
import yaml from 'js-yaml';
import axios from 'axios';

async function getVersion() {
    const url = 'https://api.bilibili.com/x/elec-frontend/update/latest.yml';
    const version = await axios.get(url).then((res) => {
        const parsed = yaml.load(res.data);
        return parsed['version'];
    })
    return version;
}

function downloadInstaller() {
    const url = 'https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe';
    shell.exec(`wget ${url} -O res/installer.exe`);
    console.log('Saved as res/installer.exe');
}

function extractInstaller() {
    shell.exec('mkdir -p res/temp')
    shell.exec('mv res/installer.exe res/temp/installer.exe');

    shell.exec('7z x res/temp/installer.exe -ores/temp/temp');
    shell.exec('rm res/temp/installer.exe');

    shell.exec('mv res/temp/temp/\\$PLUGINSDIR/app-64.7z res/temp/app-64.7z');
    shell.exec('rm -r res/temp/temp');
    shell.exec('7z x res/temp/app-64.7z -ores/temp/temp');
    shell.exec('mv res/temp/temp/resources/app.asar res/app.asar');
    shell.exec('rm -r res/temp');

    console.log('Saved to res/app.asar');
}

export { getVersion, downloadInstaller, extractInstaller };
