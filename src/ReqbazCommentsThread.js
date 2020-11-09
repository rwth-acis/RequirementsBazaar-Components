import { html, css, LitElement } from 'lit-element';

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
    this.requirementId = 2338;
    this.comments = [];
  }

  render() {
    return html`
      ${this.comments.map(
        comment => html`
          <div>${comment.message}</div>
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
