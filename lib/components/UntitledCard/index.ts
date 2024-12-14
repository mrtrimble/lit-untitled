import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardStyles } from './styles';

/**
 * Container component
 *
 * @slot - This element has a slot
 * @csspart card
 */

@customElement('untitled-card')
export class UntitledCard extends LitElement {
  @property({ type: String }) image = '';
  @property({ type: String }) headline = '';
  @property({ type: String }) subtitle = '';

  static styles = [CardStyles];

  render() {
    return html`
      <article class="card" part="card">
        ${this.image &&
        html`
          <picture class="card-image">
            <img src=${String(this.image)} />
          </picture>
        `}
        ${this.headline &&
        html`
          <hgroup>
            <h2>${this.headline}</h2>

            ${this.subtitle && html`<p>${this.subtitle}</p>`}
          </hgroup>
        `}

        <div class="card-content">
          <slot></slot>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'untited-card': UntitledCard;
  }
}
