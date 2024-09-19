import '../../dist/umd/draft-components.js';

describe('NoisyNotification', () => {
    let element;

    beforeEach(() => {
        element = document.createElement('noisy-notification');
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

    it('should update tint attribute', () => {
        element.setAttribute('state', 'info-active');
        element.setAttribute('tint', '2');
        expect(element.style.backgroundColor).toBe('#52C74D66'); // Tinted color
    });

    it('should handle dismiss state', () => {
        const dismissEvent = jest.fn();
        element.addEventListener('dismissed', dismissEvent);
        element.dismissState();
        expect(dismissEvent).toHaveBeenCalled();
    });

    it('should toggle expand state', () => {
        const expandButton = document.createElement('button');
        expandButton.classList.add('expand-button');
        element.shadowRoot.appendChild(expandButton);

        element.toggleExpand();
        expect(element.isExpanded).toBe(true);
        expect(element.style.height).toBe('auto');

        element.toggleExpand();
        expect(element.isExpanded).toBe(false);
        expect(element.style.height).toBe('50px');
    });

    it('should generate noise texture', () => {
        element.generateNoiseTexture();
        expect(element.noiseTexture).not.toBeNull();
        expect(element.shadowRoot.querySelector('.noise').style.backgroundImage).toContain('url(data:image/png;base64');
    });

    it('should start and clear the timer', () => {
        jest.useFakeTimers();
        element.startTimer();
        expect(element.timer).not.toBeNull();
        
        element.clearTimer();
        expect(element.timer).toBeNull();
    });

    it('should pause and resume timer', () => {
        jest.useFakeTimers();
        element.startTimer();
        element.pauseTimer();
        expect(element.isPaused).toBe(true);
        
        element.resumeTimer();
        expect(element.isPaused).toBe(false);
        expect(element.timer).not.toBeNull();
    });
});
