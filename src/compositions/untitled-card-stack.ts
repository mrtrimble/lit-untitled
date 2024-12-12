import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('untitled-card-stack')
export class UntitledCardStack extends LitElement {
  @property({ attribute: false })
  cards: Array<{
    headline: string | null;
    subtitle: string | null;
    id: number | null;
    image: string | null;
    content: string;
  }> = [];

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
            <untitled-card id=${`card-` + index} 
                           headline=${String(card.headline)} 
                           subtitle=${String(card.subtitle)} 
                           image=${String(card.image)}>
              ${card.content}
            </untitled-card>
          `
        )}
      </untitled-grid>
    `;
  }
}
