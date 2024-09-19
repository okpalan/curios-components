import fs from 'fs';
import path from 'path';



const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');
const DIST_DIR = path.join(process.cwd(),'dist', 'assets');

const TIMEOUT = 10000; // 10 seconds

async function copyAssets() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(ASSETS_DIR)) {
            return reject(new Error('Assets directory does not exist.'));
        }

        // Create destination directory
        fs.mkdirSync(DIST_DIR, { recursive: true });

        fs.readdir(ASSETS_DIR, (err, files) => {
            if (err) return reject(err);
            files.forEach(file => {
                fs.copyFileSync(path.join(ASSETS_DIR, file), path.join(DIST_DIR, file));
            });
            console.log('Assets copied successfully.');
            resolve();
        });
    });
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
