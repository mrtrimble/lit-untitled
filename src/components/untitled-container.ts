import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContainerMaxWidth, ContainerInlinePadding } from '../tokens/index.js';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart container
 */

@customElement('untitled-container')
export class UntitledContainer extends LitElement {
  static styles = [
    css`
      @layer components {
        :host {
          container-name: --container;
          container-type: inline-size;
          display: block;
        }

        .container {
          width: min(
            100% - var(--container-inline-padding, ${unsafeCSS(ContainerInlinePadding)}),
            var(--container-max-width, ${unsafeCSS(ContainerMaxWidth)})
          );
          margin-inline: auto;
        }
      }
    `,
  ];

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
