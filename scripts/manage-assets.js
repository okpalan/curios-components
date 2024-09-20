import fs from 'fs';
import path from 'path';



const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');
const DIST_DIR = path.join(process.cwd(),'dist', 'assets');

const TIMEOUT = 10000; // 10 seconds

async function copyAssets() {
    if (!fs.existsSync(ASSETS_DIR)) {
        throw new Error('Assets directory does not exist.');
    }

    // Create destination directory
    await fs.promises.mkdir(DIST_DIR, { recursive: true });

    const files = await fs.promises.readdir(ASSETS_DIR);
    for (const file of files) {
        await fs.promises.copyFile(path.join(ASSETS_DIR, file), path.join(DIST_DIR, file));
    }
    console.log('Assets copied successfully.');
}

function waitForAssets(timeout) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        const checkAssets = async () => {
            if (fs.existsSync(ASSETS_DIR)) {
                await copyAssets();
                resolve();
            } else if (Date.now() - startTime < timeout) {
                console.log('Waiting for assets directory...');
                setTimeout(checkAssets, 1000); // Check every second
            } else {
                reject(new Error('Timeout reached while waiting for assets directory.'));
            }
        };

        checkAssets();
    });
}

export { waitForAssets}
