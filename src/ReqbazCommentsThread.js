import { html, css, LitElement } from 'lit';

/**
 * Here is a description of my web component.
 *
 * @element reqbaz-comments-thread
 *
 */
export class ReqbazCommentsThread extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;

        overflow-y: auto;
        word-break: break-word;
        word-wrap: break-word;

        --font-size--small: calc((14 / 16) * 1rem); /* 14px */
        --font-size--default: calc((16 / 16) * 1rem); /* 16px */
        --font-size--large: calc((24 / 16) * 1rem); /* 24px */
      }

      .comment {
        margin-top: 5px;
      }

      .author {
        font-size: var(--font-size--small);
        color: #90949c;
      }

      .reply {
        margin-left: 40px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Base URL of the Requirements Bazaar instance to work with.
       */
      baseUrl: { type: String },
      requirementId: { type: Number },
      comments: { type: Array },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.requirementId = 1187;
    this.comments = [];
  }

  render() {
    if (this.comments.length === 0) {
      return html`
        No comments yet...
      `;
    }

    return html`
      ${this.comments.map(
        comment => html`
          <div class="comment ${comment.replyToComment ? 'reply' : ''}">
            <div>${comment.message}</div>
            <div class="author">${comment.creationDate} by ${comment.creator.userName}</div>
          </div>
        `,
      )}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'requirementId') {
        this.comments = [];
        this.fetchComments();
      }
    });
  }

  async fetchComments() {
    const url = `${this.baseUrl}requirements/${this.requirementId}/comments`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    Array.prototype.push.apply(this.comments, jsonResponse);

    // manually trigger an update, because update happens within Array
    this.requestUpdate();
  }
}
