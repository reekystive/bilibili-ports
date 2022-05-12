import electronPackager from 'electron-packager'
import os from 'os'
import { getVersion, downloadInstaller, extractInstaller } from './utils'

async function build() {
    const latestVersion = await getVersion();
    const platform = os.platform();
    const arch = os.arch();
    console.log('Latest version is ' + latestVersion);
    console.log('Current platform is ' + platform);
    console.log('Current arch is ' + arch);

    console.log('Downloading installer...');
    downloadInstaller();
    console.log('Extracting installer...')
    extractInstaller();
    console.log('Building...')

    electronPackager({
        dir: 'res',
        out: 'out',
        name: 'Bilibili',
        icon: 'res/icon',
        executableName: 'Bilibili',
        platform: platform,
        arch: arch,
        appVersion: latestVersion,
        overwrite: true,
        prebuiltAsar: 'res/app.asar',
        electronVersion: '18.2.3'
    }).then((res) => {
        console.log('Saved');
        for (let item of res) {
            console.log(item)
        }
    })
}

build();
