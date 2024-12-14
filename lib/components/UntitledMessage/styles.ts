import { css, unsafeCSS } from 'lit';

import {
  MessageBackgroundColor,
  MessageBorderColor,
  MessageBorderStyle,
  MessageBorderWidth,
  MessageColor,
  MessagePaddingBlock,
  MessagePaddingInline,
} from '../../tokens';

export const MessageStyles = css`
  @layer components {
    :host {
      display: block;
      container-name: --message;
      container-type: inline-size;
    }
  
    .message {
      background: var(--message-background, ${unsafeCSS(MessageBackgroundColor)});
      border-color: var(--message-border-color, ${unsafeCSS(MessageBorderColor)});
      border-width: 0;
      border-inline-start-width: var(--message-border-width, ${unsafeCSS(MessageBorderWidth)});
      border-style: var(--message-border-style, ${unsafeCSS(MessageBorderStyle)});
      color: var(--message-text-color, ${unsafeCSS(MessageColor)});
      padding-block: var(--message-padding-block, ${unsafeCSS(MessagePaddingBlock)});
      padding-inline: var(--message-padding-inline, ${unsafeCSS(MessagePaddingInline)});
    }
  }
`;
