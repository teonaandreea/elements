import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './input.css';

customElementDefineHelper(
	'ts-input',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				disabled: { type: Boolean, attribute: 'disabled', reflect: true }
			};
		}

		attributeChangedCallback(name, oldval, newval) {
			const input = this.getSlotInput();
			if (name === 'disabled' && input) {
				input.disabled = newval;
			}
			super.attributeChangedCallback(name, oldval, newval);
		}

		firstUpdated(changeedProperties) {
			const input = this.getSlotInput();
			if ((this.disabled !== undefined || this.disabled !== null) && input) {
				input.disabled = true;
			}
		}

		getSlotInput() {
			const slot = this.shadowRoot.querySelector('slot');
			const elements = slot.assignedNodes().filter(el => el.constructor.name === 'HTMLInputElement');
			if (elements.length < 1) {
				console.warn('We need one input element in the slot');
			}
			if (elements.length > 1) {
				console.warn('We need only one input element in the slot');
			}
			return elements[0];
		}

		render() {
			return html`
				<div>
					<slot></slot>
				</div>
			`;
		}
	}
);
