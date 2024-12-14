import { css, unsafeCSS } from 'lit';
import { ContainerMaxWidth, ContainerInlinePadding } from '../../tokens/index.js';

export const ContainerStyles = css`
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
`;
