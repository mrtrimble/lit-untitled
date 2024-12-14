import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
  DrawerBackgroundColor,
  DrawerBorder,
  DrawerFlowSpace,
  DrawerPaddingBlock,
  DrawerPaddingInline,
  DrawerTextColor,
  DrawerTransition,
  DrawerWidth,
} from '../tokens';

@customElement('untitled-drawer')
export class UntitledDrawer extends LitElement {
  @property({ type: String }) headline = '';
  @property({ type: String }) subtitle = '';

  static styles = [
    css`
      :host {
        display: block;
      }

      .drawer {
        color: var(--drawer-text-color, ${unsafeCSS(DrawerTextColor)});
        container-type: inline-size;
        container-name: --drawer;
        background: var(--drawer-background-color, ${unsafeCSS(DrawerBackgroundColor)});
        border: var(--drawer-border, ${unsafeCSS(DrawerBorder)});
        height: 100vh;
        height: 100dvh;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        margin: 0;
        transition: var(--drawer-transition, ${unsafeCSS(DrawerTransition)});
        transform: translateX(-100%);
        width: min(100%, var(--drawer-width, ${unsafeCSS(DrawerWidth)}));

        &:popover-open {
          transform: translateX(0);
        }

        > * {
          margin: 0;
          padding-inline: var(--drawer-padding-inline, ${unsafeCSS(DrawerPaddingInline)});

          &:is(:first-child) {
            padding-block-start: var(--drawer-padding-block, ${unsafeCSS(DrawerPaddingBlock)});
          }

          &:is(:last-child) {
            padding-block-end: var(--drawer-padding-block, ${unsafeCSS(DrawerPaddingBlock)});
          }
        }

        > * + * {
          margin-block-start: var(--drawer-flow-space, ${unsafeCSS(DrawerFlowSpace)});
        }
      }

      .drawer-header {
      }

      .drawer-content {
      }
    `,
  ];

  render() {
    return html`
      <button class="button" popovertarget="drawer" popoveraction="open">Toggle Drawer</button>
      <section id="drawer" class="drawer" aria-label="Drawer" popover>
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
