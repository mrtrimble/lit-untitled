import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('untitled-card-stack')
export class UntitledCardStack extends LitElement {
  @property({ attribute: false }) cards = [];

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      
        <untitled-grid>
          ${repeat(
            this.cards,
            (card) => card.id,
            (card, index) => html`
              <untitled-card id=${`card-` + index} headline=${card.headline} subtitle=${card.subtitle} image=${card.image}>
                ${card.content}
              </untitled-card>
            `
          )}
        </untitled-grid>

    `;
  }
}
