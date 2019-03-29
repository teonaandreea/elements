import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';

export class TSElement extends LitElement {
	static get styles() {
		return unsafeCSS(commonCSS);
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';