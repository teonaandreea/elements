import { TSElement } from '@tradeshift/elements';
import { html, css, customElement, property } from 'lit-element';
import styles from './button.css';

@customElement('ts-button')
export class Button extends TSElement {
	static styles = [super.styles, css(styles)];

	@property({ type: String })
	type = '';

	@property({ type: Boolean })
	grouped = false;

	render() {
		return html`
			<button>
				<span class="${this.type !== text ? 'title' : ''}">
					<slot></slot>
				</span>
			</button>
		`;
	}
}
