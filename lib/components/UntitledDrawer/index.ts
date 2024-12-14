import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DrawerStyles } from './styles';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart drawer
 */

@customElement('untitled-drawer')
export class UntitledDrawer extends LitElement {
  @property({ type: String }) headline = '';
  @property({ type: String }) subtitle = '';

  static styles = [DrawerStyles];

  render() {
    return html`
      <button class="button" popovertarget="drawer" popoveraction="open">Toggle Drawer</button>
      <section id="drawer" class="drawer" aria-label="Drawer" popover part="drawer">
        <article class="drawer-content">
          <header class="drawer-header">
            ${this.headline &&
            html`
              <hgroup>
                <h2>${this.headline}</h2>
                ${this.subtitle && html`<p>${this.subtitle}</p>`}
              </hgroup>
            `}
            <button popovertarget="drawer" popoveraction="close">Close</button>
          </header>

          <slot></slot>
        </article>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'untited-drawer': UntitledDrawer;
  }
}
