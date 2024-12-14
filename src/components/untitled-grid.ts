import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GridGap, GridMin } from '../tokens';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart grid
 */
@customElement('untitled-grid')
export class UntitledGrid extends LitElement {
  static styles = [
    css`
      @layer component {
        :host {
          display: block;
          container-type: inline-size;
          container-name: --grid;
        }

        .grid {
          display: grid;
          grid-gap: var(--grid-gap, ${unsafeCSS(GridGap)});
          grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--grid-min, ${unsafeCSS(GridMin)})), 1fr));
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="grid" part="grid">
        <slot></slot>
      </div>
    `;
  }
}
