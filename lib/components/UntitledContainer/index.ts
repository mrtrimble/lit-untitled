import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContainerStyles } from './styles';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart container
 */

@customElement('untitled-container')
export class UntitledContainer extends LitElement {
  static styles = [ContainerStyles];

  render() {
    return html`
      <div class="container flow" part="container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'untited-container': UntitledContainer;
  }
}
