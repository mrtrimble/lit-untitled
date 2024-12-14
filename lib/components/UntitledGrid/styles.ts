import { css, unsafeCSS } from 'lit';
import { GridGap, GridMin } from '../../tokens';

export const GridStyles = css`
  @layer components {
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
`;
