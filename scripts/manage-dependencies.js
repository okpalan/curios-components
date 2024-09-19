const { waitForAssets } = require('./manage-assets');

const TIMEOUT = 15000; // 15 seconds

async function manageDependencies() {
    try {
        await waitForAssets(TIMEOUT);
        console.log('Dependency management complete.');
    } catch (error) {
        console.error('Dependency management failed.');
        console.error(error);
        
        console.error(error.message);
    }
}

// Run the dependency management process
manageDependencies();
