import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import _wrapNativeSuper from '@babel/runtime/helpers/wrapNativeSuper';
import _regeneratorRuntime from '@babel/runtime/regenerator';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}var
NoisyNotification$1 = /*#__PURE__*/function (_HTMLElement) {
  function NoisyNotification() {var _this;_classCallCheck(this, NoisyNotification);
    _this = _callSuper(this, NoisyNotification);
    _this.attachShadow({ mode: 'open' });
    _this.loadTemplate();
    _this.noiseTexture = null;
    _this.timer = null;
    _this.isPaused = false;
    _this.isExpanded = false;
    _this.startTime = Date.now();return _this;
  }_inherits(NoisyNotification, _HTMLElement);return _createClass(NoisyNotification, [{ key: "attributeChangedCallback", value:





    function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'state') {
        this.updateState();
      } else if (name === 'tint') {
        this.updateTint();
      } else if (name === 'duration') {
        this.updateDuration();
      }
    } }, { key: "connectedCallback", value:

    function connectedCallback() {var _this2 = this;
      this.generateNoiseTexture();
      this.loadTemplate().then(function () {
        _this2.startTimer();
        _this2.addEventListeners();
      });
    } }, { key: "disconnectedCallback", value:

    function disconnectedCallback() {
      this.clearTimer();
      this.removeEventListeners();
    } }, { key: "loadTemplate", value: function () {var _loadTemplate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(

        function _callee() {var response, template;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  fetch('draft/noisy-notification.html'));case 2:response = _context.sent;_context.next = 5;return (
                  response.text());case 5:template = _context.sent;
                this.shadowRoot.innerHTML = template;
                this.addStyles();case 8:case "end":return _context.stop();}}, _callee, this);}));function loadTemplate() {return _loadTemplate.apply(this, arguments);}return loadTemplate;}() }, { key: "addStyles", value:


    function addStyles() {var _this3 = this;
      fetch('draft/noisy-notification.css').
      then(function (response) {return response.text();}).
      then(function (css) {
        var style = document.createElement('style');
        style.textContent = css;
        _this3.shadowRoot.appendChild(style);
      });
    } }, { key: "addEventListeners", value:

    function addEventListeners() {var _this4 = this;
      var closeButton = this.shadowRoot.querySelector('.close-button');
      var expandButton = this.shadowRoot.querySelector('.expand-button');

      closeButton.addEventListener('click', function () {return _this4.dismissState();});
      expandButton.addEventListener('click', function () {return _this4.toggleExpand();});
      this.addEventListener('mouseover', function () {return _this4.pauseTimer();});
      this.addEventListener('mouseleave', function () {return _this4.resumeTimer();});
      this.addEventListener('touchstart', function () {return _this4.pauseTimer();});
      this.addEventListener('touchend', function () {return _this4.resumeTimer();});
    } }, { key: "removeEventListeners", value:

    function removeEventListeners() {
      var closeButton = this.shadowRoot.querySelector('.close-button');
      var expandButton = this.shadowRoot.querySelector('.expand-button');

      closeButton.removeEventListener('click', this.dismissState);
      expandButton.removeEventListener('click', this.toggleExpand);
      this.removeEventListener('mouseover', this.pauseTimer);
      this.removeEventListener('mouseleave', this.resumeTimer);
      this.removeEventListener('touchstart', this.pauseTimer);
      this.removeEventListener('touchend', this.resumeTimer);
    } }, { key: "generateNoiseTexture", value:

    function generateNoiseTexture() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var width = 512;
      var height = 512;
      canvas.width = width;
      canvas.height = height;

      function prng(seed) {
        var value = seed;
        return function () {
          value = (value * 9301 + 49297) % 233280;
          return value / 233280;
        };
      }

      function generateNoise(ctx, width, height, seed) {
        var imageData = ctx.createImageData(width, height);
        var data = imageData.data;
        var random = prng(seed);

        for (var i = 0; i < data.length; i += 4) {
          var value = Math.floor(random() * 255);
          data[i] = value;
          data[i + 1] = value;
          data[i + 2] = value;
          data[i + 3] = 50; // Semi-transparent
        }

        ctx.putImageData(imageData, 0, 0);
      }

      generateNoise(ctx, width, height, 42);
      this.noiseTexture = canvas.toDataURL();
      this.shadowRoot.querySelector('.noise').style.backgroundImage = "url(".concat(this.noiseTexture, ")");
    } }, { key: "startTimer", value:

    function startTimer() {var _this5 = this;
      if (this.isCollapsible) {
        this.clearTimer();
        this.startTime = Date.now();
        this.timer = setTimeout(function () {return _this5.dismissState();}, this.duration);
      }
    } }, { key: "clearTimer", value:

    function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    } }, { key: "pauseTimer", value:

    function pauseTimer() {
      if (this.isCollapsible && !this.isPaused) {
        this.isPaused = true;
        this.clearTimer();
      }
    } }, { key: "resumeTimer", value:

    function resumeTimer() {
      if (this.isCollapsible && this.isPaused) {
        this.isPaused = false;
        this.startTimer();
      }
    } }, { key: "dismissState", value:

    function dismissState() {
      this.clearTimer();
      this.dispatchEvent(new CustomEvent('dismissed'));
      this.remove(); // Optionally remove from DOM
    } }, { key: "toggleExpand", value:

    function toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.shadowRoot.querySelector('.expand-button span').textContent = this.isExpanded ? '🔼' : '🔽'; // Change symbol
      this.style.height = this.isExpanded ? 'auto' : '50px'; // Toggle height
    } }, { key: "updateState", value:

    function updateState() {
      this.style.backgroundColor = this.getTintedColor();
    } }, { key: "updateTint", value:

    function updateTint() {
      this.style.backgroundColor = this.getTintedColor();
    } }, { key: "updateDuration", value:

    function updateDuration() {
      this.clearTimer();
      this.startTimer();
    } }, { key: "getTintedColor", value:

    function getTintedColor() {
      var colorMap = {
        danger: '#FF4500',
        warning: '#F6C737',
        'info-active': '#52C74D',
        'info-inactive': '#5E7A74'
      };

      var color = colorMap[this.getAttribute('state')] || '#000';
      return this.tintColor(color, parseInt(this.getAttribute('tint')) || 0);
    } }, { key: "tintColor", value:

    function tintColor(color, tintLevel) {
      var tints = {
        0: '00',
        1: '33',
        2: '66',
        3: '99'
      };

      return "".concat(color).concat(tints[tintLevel]);
    } }, { key: "isCollapsible", get:

    function get() {
      return ['info', 'warning', 'success'].includes(this.getAttribute('state'));
    } }, { key: "duration", get:

    function get() {
      return parseInt(this.getAttribute('duration')) || 5000;
    } }], [{ key: "observedAttributes", get: function get() {return ['state', 'tint', 'duration'];} }]);}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));


customElements.define('noisy-notification', NoisyNotification$1);

module.exports = NoisyNotification$1;

var NoisyNotification$2 = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(NoisyNotification$2);

var NoisyNotification = require$$0;

var index = /*@__PURE__*/getDefaultExportFromCjs(NoisyNotification);

export { index as default };
//# sourceMappingURL=NoisyNotification.esm.js.map
