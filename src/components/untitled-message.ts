import { LitElement, html, css, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  MessageBackgroundColor,
  MessageBorderColor,
  MessageBorderStyle,
  MessageBorderWidth,
  MessageColor,
  MessagePaddingBlock,
  MessagePaddingInline,
} from '../tokens';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart message
 */
@customElement('untitled-message')
export class UntitledMessage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        container-name: --message;
        container-type: inline-size;
      }

      .message {
        background: var(--message-background, ${unsafeCSS(MessageBackgroundColor)});
        border-color: var(--message-border-color, ${unsafeCSS(MessageBorderColor)});
        border-width: 0;
        border-inline-start-width: var(--message-border-width, ${unsafeCSS(MessageBorderWidth)});
        border-style: var(--message-border-style, ${unsafeCSS(MessageBorderStyle)});
        color: var(--message-text-color, ${unsafeCSS(MessageColor)});
        padding-block: var(--message-padding-block, ${unsafeCSS(MessagePaddingBlock)});
        padding-inline: var(--message-padding-inline, ${unsafeCSS(MessagePaddingInline)});
      }
    `,
  ];

  @property({ type: String }) type = '';

  render() {
    return html`
      <div class=${['message', this.type ?? nothing].join(' ')} part="message">
        <slot></slot>
      </div>
    `;
  }
}
