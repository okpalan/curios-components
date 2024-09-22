const { setupTests } = require('../utils/index.cjs');
// Ensure the setup runs
beforeAll(async () => {
    await setupTests(); // Call your setup function
});
const NoisyNotification = require('@/NoisyNotification');

describe('NoisyNotification', () => {
    let element;

    beforeEach(() => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            text: jest.fn().mockResolvedValue('<div class="noise"></div>'),
        });

        customElements.define('noisy-notification', NoisyNotification);
        element = document.createElement('noisy-notification');
        document.body.appendChild(element);
    });

    afterEach(() => {
        if (element) {
            document.body.removeChild(element);
        }
        jest.restoreAllMocks();
    });

    it('should be defined', () => {
        expect(customElements.get('noisy-notification')).toBe(NoisyNotification);
    });

    it('should load the template on connectedCallback', async () => {
        await element.connectedCallback();
        expect(element.shadowRoot).toBeDefined();
        expect(element.shadowRoot.querySelector('.noise')).toBeTruthy();
    });

    it('should start the timer when connected', async () => {
        jest.spyOn(element, 'startTimer');
        await element.connectedCallback();
        expect(element.startTimer).toHaveBeenCalled();
    });

    it('should dismiss the notification when timer completes', async () => {
        jest.useFakeTimers();
        await element.connectedCallback();
        jest.spyOn(element, 'dispatchEvent');
        element.setAttribute('duration', '1000'); // Set a short duration for testing
        element.startTimer();
        jest.advanceTimersByTime(1000);
        expect(element.dispatchEvent).toHaveBeenCalledWith(expect.any(CustomEvent));
    });

    it('should pause and resume the timer on mouse events', async () => {
        await element.connectedCallback();
        element.startTimer();

        // Simulate mouseover
        element.dispatchEvent(new Event('mouseover'));
        expect(element.isPaused).toBe(true);
        expect(element.timer).toBeNull();

        // Simulate mouseleave
        element.dispatchEvent(new Event('mouseleave'));
        expect(element.isPaused).toBe(false);
        expect(element.timer).toBeDefined();
    });

    it('should update the background color based on state and tint', async () => {
        await element.connectedCallback();
        element.setAttribute('state', 'warning');
        element.setAttribute('tint', '2');
        const expectedColor = '#F6C73766'; // Expected color after tint
        expect(element.style.backgroundColor).toBe(expectedColor);
    });

    it('should toggle expansion state when expand button is clicked', async () => {
        await element.connectedCallback();
        const expandButton = element.shadowRoot.querySelector('.expand-button');
        expandButton.dispatchEvent(new Event('click'));
        expect(element.isExpanded).toBe(true);
        expect(element.style.height).toBe('auto');

        // Click again to collapse
        expandButton.dispatchEvent(new Event('click'));
        expect(element.isExpanded).toBe(false);
        expect(element.style.height).toBe('0px'); // Or whatever height indicates collapsed state
    });

    it('should dismiss the notification when close button is clicked', async () => {
        await element.connectedCallback();
        jest.spyOn(element, 'dismissState');
        const closeButton = element.shadowRoot.querySelector('.close-button');
        closeButton.dispatchEvent(new Event('click'));
        expect(element.dismissState).toHaveBeenCalled();
    });

    it('should not update background color if state is invalid', async () => {
        await element.connectedCallback();
        element.setAttribute('state', 'invalid');
        const initialColor = element.style.backgroundColor; // Store the initial color
        element.setAttribute('tint', '2'); // Trying to change tint
        expect(element.style.backgroundColor).toBe(initialColor); // Should remain unchanged
    });

    it('should emit a custom event when notification is dismissed', async () => {
        await element.connectedCallback();
        jest.spyOn(element, 'dispatchEvent');
        element.dismissState(); // Simulate dismissal
        expect(element.dispatchEvent).toHaveBeenCalledWith(expect.objectContaining({
            type: 'notification-dismissed',
        }));
    });
});
