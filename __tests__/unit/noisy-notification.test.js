import NoisyNotification from '../../src/noisy-notification/noisy-notification.js';

describe('NoisyNotification', () => {
    let element;

    beforeEach(() => {
        customElements.define('noisy-notification', NoisyNotification);
        element = document.createElement('noisy-notification');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('should be defined', () => {
        expect(NoisyNotification).toBeDefined();
    });

    it('should initialize with default values', () => {
        expect(element.noiseTexture).toBeNull();
        expect(element.timer).toBeNull();
        expect(element.isPaused).toBe(false);
        expect(element.isExpanded).toBe(false);
        expect(element.duration).toBe(5000);
    });
    
    it('should change background color when state attribute is set to "danger"', () => {
        element.setAttribute('state', 'danger');
        element.updateState();
        expect(getComputedStyle(element).backgroundColor).toBe('rgb(255, 69, 0)');
    });

    it('should default to a neutral color if an invalid state is set', () => {
        element.setAttribute('state', 'invalid');
        element.updateState();
        expect(getComputedStyle(element).backgroundColor).toBe('rgb(0, 0, 0)');
    });

    it('should load the template correctly', async () => {
        await element.loadTemplate();
        expect(element.shadowRoot.innerHTML).toContain('<expectedTemplateContent>'); // Replace with actual content
    });

    it('should dispatch a dismissed event when dismissed', () => {
        const dismissHandler = jest.fn();
        element.addEventListener('dismissed', dismissHandler);
        element.dismissState();
        expect(dismissHandler).toHaveBeenCalled();
    });
});
