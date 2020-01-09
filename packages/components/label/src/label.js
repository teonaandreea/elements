import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './label.css';

customElementDefineHelper(
	'ts-label',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		render() {
			return html`
				<label>
					<slot></slot>
				</label>
			`;
		}
	}
);
