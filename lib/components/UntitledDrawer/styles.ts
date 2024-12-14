import { css, unsafeCSS } from 'lit';
import {
  DrawerBackgroundColor,
  DrawerBorder,
  DrawerFlowSpace,
  DrawerPaddingBlock,
  DrawerPaddingInline,
  DrawerTextColor,
  DrawerTransition,
  DrawerWidth,
} from '../../tokens';

export const DrawerStyles = css`
  @layer components {
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
  }
`;
