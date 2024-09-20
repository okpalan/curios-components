import '../../dist/umd/draft-components.js';

describe('NoisyNotification', () => {
    let element;

    beforeEach(async () => {
        element = document.createElement('noisy-notification');
        await element.loadTemplate(); // Ensure the template is loaded
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
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
        expect(element.style.backgroundColor).toBe('#FF4500'); // Check danger color
    });

    // Add other tests similarly
});
