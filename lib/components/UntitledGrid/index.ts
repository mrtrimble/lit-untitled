import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GridStyles } from './styles';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart grid
 */

@customElement('untitled-grid')
export class UntitledGrid extends LitElement {
  static styles = [GridStyles];

  render() {
    return html`
      <div class="grid" part="grid">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'untited-grid': UntitledGrid;
  }
}