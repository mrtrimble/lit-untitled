import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MessageStyles } from './styles';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart message
 */

@customElement('untitled-message')
export class UntitledMessage extends LitElement {
  static styles = [MessageStyles];

  @property({ type: String }) type = '';

  render() {
    return html`
      <div class=${['message', this.type ?? nothing].join(' ')} part="message">
        <slot></slot>
      </div>
    `;
  }
}
