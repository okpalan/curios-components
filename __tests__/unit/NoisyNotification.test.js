import { NoisyNotification } from '@/NoisyNotification';

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

    it('should start timer when connected', async () => {
        jest.spyOn(element, 'startTimer');
        await element.connectedCallback();
        expect(element.startTimer).toHaveBeenCalled();
    });

    it('should dismiss the notification on timer completion', async () => {
        jest.useFakeTimers();
        await element.connectedCallback();
        jest.spyOn(element, 'dispatchEvent');
        element.setAttribute('duration', '1000'); // Set short duration for testing
        element.startTimer();
        jest.advanceTimersByTime(1000);
        expect(element.dispatchEvent).toHaveBeenCalledWith(expect.any(CustomEvent));
    });

    it('should pause and resume the timer on mouse events', async () => {
        await element.connectedCallback();
        element.startTimer();

        element.dispatchEvent(new Event('mouseover'));
        expect(element.isPaused).toBe(true);
        expect(element.timer).toBeNull();

        element.dispatchEvent(new Event('mouseleave'));
        expect(element.isPaused).toBe(false);
        expect(element.timer).toBeDefined();
    });

    it('should update state and tint attributes correctly', async () => {
        await element.connectedCallback();
        element.setAttribute('state', 'warning');
        element.setAttribute('tint', '2');
        expect(element.style.backgroundColor).toBe('#F6C73766'); // Example of expected tint result
    });

    it('should toggle expansion state on button click', async () => {
        await element.connectedCallback();
        const expandButton = element.shadowRoot.querySelector('.expand-button');
        expandButton.dispatchEvent(new Event('click'));
        expect(element.isExpanded).toBe(true);
        expect(element.style.height).toBe('auto');
    });

    it('should dismiss the notification on close button click', async () => {
        await element.connectedCallback();
        jest.spyOn(element, 'dismissState');
        const closeButton = element.shadowRoot.querySelector('.close-button');
        closeButton.dispatchEvent(new Event('click'));
        expect(element.dismissState).toHaveBeenCalled();
    });
});
