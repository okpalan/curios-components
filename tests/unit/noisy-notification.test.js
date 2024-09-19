import { html, fixture, expect } from '@open-wc/testing';

describe('NoisyNotification', () => {
    it('should be instantiated correctly', async () => {
        const el = await fixture(html`<draft-noisy-notification></draft-noisy-notification>`);
        expect(el).toBeInstanceOf(NoisyNotification);
    });

    it('should set and get state attribute', async () => {
        const el = await fixture(html`<draft-noisy-notification state="danger"></draft-noisy-notification>`);
        expect(el.getAttribute('state')).toEqual('danger');
    });

    it('should toggle expand state', async () => {
        const el = await fixture(html`<draft-noisy-notification></draft-noisy-notification>`);
        el.toggleExpand();
        expect(el.isExpanded).toBe(true);
        el.toggleExpand();
        expect(el.isExpanded).toBe(false);
    });
});
