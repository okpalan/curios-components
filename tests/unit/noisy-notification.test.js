/* eslint-disable-next-line import/no-unused-modules */
import NoisyNotification from '../../src/main.js';

describe('NoisyNotification', () => {
    let element;

    beforeEach(() => {
        element = document.createElement('noisy-notification');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('should be defined', () => {
        expect(NoisyNotification).toBeDefined(); // Prevents ESLint from flagging the import as unused
    });

    it('should initialize with default values', () => {
        expect(element.noiseTexture).toBeNull();
        expect(element.timer).toBeNull();
        expect(element.isPaused).toBe(false);
        expect(element.isExpanded).toBe(false);
        expect(element.duration).toBe(5000); // Default duration
    });

    it('should update state attribute', () => {
        element.setAttribute('state', 'danger');
        expect(getComputedStyle(element).backgroundColor).toBe('rgb(255, 69, 0)'); // Check danger color
    });
});
