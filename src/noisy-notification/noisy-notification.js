export class NoisyNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadTemplate();
        this.noiseTexture = null;
        this.timer = null;
        this.isPaused = false;
        this.isExpanded = false;
        this.startTime = Date.now();
    }

    static get observedAttributes() {
        return ['state', 'tint', 'duration'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'state') {
            this.updateState();
        } else if (name === 'tint') {
            this.updateTint();
        } else if (name === 'duration') {
            this.updateDuration();
        }
    }

    connectedCallback() {
        this.generateNoiseTexture();
        this.startTimer();
        this.addEventListeners();
    }

    disconnectedCallback() {
        this.clearTimer();
        this.removeEventListeners();
    }

    async loadTemplate() {
        const response = await fetch('draft/noisy-notification.html');
        const template = await response.text();
        this.shadowRoot.innerHTML = template;
        this.addStyles();
    }

    addStyles() {
        fetch('draft/noisy-notification.css')
            .then(response => response.text())
            .then(css => {
                const style = document.createElement('style');
                style.textContent = css;
                this.shadowRoot.appendChild(style);
            });
    }

    addEventListeners() {
        this.shadowRoot.querySelector('.close-button').addEventListener('click', () => this.dismissState());
        this.shadowRoot.querySelector('.expand-button').addEventListener('click', () => this.toggleExpand());
        this.addEventListener('mouseover', () => this.pauseTimer());
        this.addEventListener('mouseleave', () => this.resumeTimer());
        this.addEventListener('touchstart', () => this.pauseTimer());
        this.addEventListener('touchend', () => this.resumeTimer());
    }

    removeEventListeners() {
        this.shadowRoot.querySelector('.close-button').removeEventListener('click', () => this.dismissState());
        this.shadowRoot.querySelector('.expand-button').removeEventListener('click', () => this.toggleExpand());
        this.removeEventListener('mouseover', () => this.pauseTimer());
        this.removeEventListener('mouseleave', () => this.resumeTimer());
        this.removeEventListener('touchstart', () => this.pauseTimer());
        this.removeEventListener('touchend', () => this.resumeTimer());
    }

    generateNoiseTexture() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 512;
        const height = 512;
        canvas.width = width;
        canvas.height = height;

        function prng(seed) {
            let value = seed;
            return function () {
                value = (value * 9301 + 49297) % 233280;
                return value / 233280;
            };
        }

        function generateNoise(ctx, width, height, seed) {
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;
            const random = prng(seed);

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.floor(random() * 255);
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = 50;
            }

            ctx.putImageData(imageData, 0, 0);
        }

        generateNoise(ctx, width, height, 42);
        this.noiseTexture = canvas.toDataURL();
        this.shadowRoot.querySelector('.noise').style.backgroundImage = `url(${this.noiseTexture})`;
    }

    startTimer() {
        if (this.isCollapsible) {
            this.clearTimer();
            this.startTime = Date.now();
            this.timer = setTimeout(() => this.dismissState(), this.duration);
        }
    }

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    pauseTimer() {
        if (this.isCollapsible && !this.isPaused) {
            this.isPaused = true;
            this.clearTimer();
        }
    }

    resumeTimer() {
        if (this.isCollapsible && this.isPaused) {
            this.isPaused = false;
            this.startTimer();
        }
    }

    dismissState() {
        this.clearTimer();
        this.dispatchEvent(new CustomEvent('dismissed'));
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
        this.shadowRoot.querySelector('.expand-button img').src = this.isExpanded ? 'collapse.svg' : 'expand.svg';
        this.style.height = this.isExpanded ? 'auto' : '50px';
    }

    updateState() {
        this.style.backgroundColor = this.getTintedColor();
    }

    updateTint() {
        this.style.backgroundColor = this.getTintedColor();
    }

    updateDuration() {
        this.clearTimer();
        this.startTimer();
    }

    getTintedColor() {
        const colorMap = {
            danger: '#FF4500',
            warning: '#F6C737',
            'info-active': '#52C74D',
            'info-inactive': '#5E7A74',
        };

        let color = colorMap[this.getAttribute('state')] || '#000';
        return this.tintColor(color, parseInt(this.getAttribute('tint')) || 0);
    }

    tintColor(color, tintLevel) {
        const tints = {
            0: '00',
            1: '33',
            2: '66',
            3: '99',
        };

        return `${color}${tints[tintLevel]}`;
    }

    get isCollapsible() {
        return ['info', 'warning', 'success'].includes(this.getAttribute('state'));
    }

    get duration() {
        return parseInt(this.getAttribute('duration')) || 5000;
    }
}

customElements.define('noisy-notification', NoisyNotification);
