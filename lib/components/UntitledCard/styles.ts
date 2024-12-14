import { css, unsafeCSS } from 'lit';
import {
  CardBackgroundColor,
  CardBorderColor,
  CardBorderRadius,
  CardBorderStyle,
  CardBorderWidth,
  CardContentMarginInline,
  CardFlowSpace,
  CardTextColor,
} from '../../tokens';

export const CardStyles = css`
  @layer components {
    :host {
      display: block;
      container-type: inline-size;
      container-name: --card;
    }

    .card {
      align-content: start;
      background-color: var(--card-background-color, ${unsafeCSS(CardBackgroundColor)});
      border: var(--card-border-width, ${unsafeCSS(CardBorderWidth)}) var(--card-border-color, ${unsafeCSS(CardBorderColor)})
        var(--card-border-style, ${unsafeCSS(CardBorderStyle)});
      border-radius: var(--card-border-radius, ${unsafeCSS(CardBorderRadius)});
      color: var(--card-text-color, ${unsafeCSS(CardTextColor)});
      height: 100%;
      display: grid;
      overflow: clip;

      > *:not(figure, img, picture) {
        margin-inline: var(--card-margin-inline, ${unsafeCSS(CardContentMarginInline)});
        margin-block-start: var(--card-flow-space, ${unsafeCSS(CardFlowSpace)});

        &:last-child {
          margin-block-end: var(--card-margin-inline, ${unsafeCSS(CardContentMarginInline)});
        }
      }

      figure,
      picture,
      img {
        margin: none;
        padding: none;
        width: 100%;
        height: auto;
      }

      figure,
      picture {
        > img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

      hgroup {
        > * {
          margin: 0;
        }

        &:has(h2 ~ p) {
          h2 {
            font-size: var(--text-size-md);
            font-weight: normal;
          }
          p {
            font-size: var(--text-size-xl);
            font-weight: bold;
            line-height: 1.1;
            margin-block: var(--space-2xs);
            text-wrap: balance;
          }
        }

        &:has(h2) {
          h2 {
            font-size: var(--text-size-xl);
            line-height: 1.1;
            margin-block: var(--space-2xs);
            text-wrap: balance;
          }
        }
      }
    }
  }
`;
