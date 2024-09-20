import NoisyNotification from '../../src/noisy-notification/noisy-notification.js';

describe('NoisyNotification', () => {
    let element;

    beforeEach(() => {
        // Define the custom element
        customElements.define('noisy-notification', NoisyNotification);
        
        element = document.createElement('noisy-notification');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('should be defined', () => {
        expect(NoisyNotification).toBeDefined(); // Ensures NoisyNotification is imported correctly
    });

    it('should initialize with default values', () => {
        // Allow the element to fully initialize
        expect(element.noiseTexture).toBeNull();
        expect(element.timer).toBeNull();
        expect(element.isPaused).toBe(false);
        expect(element.isExpanded).toBe(false);
        expect(element.duration).toBe(5000); // Default duration
    });
    
    it('should update state attribute', () => {
        element.setAttribute('state', 'danger');
        element.updateState(); // Ensure the state is updated
        expect(getComputedStyle(element).backgroundColor).toBe('rgb(255, 69, 0)'); // Check danger color
    });
});
