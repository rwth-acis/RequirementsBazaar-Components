import { html, css, LitElement } from 'lit-element';
import '../reqbaz-category-card.js';

/**
 * Here is a description of my web component.
 *
 * @element reqbaz-categories-list
 *
 */
export class ReqbazCategoriesList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      a {
        width: 100%;
        max-width: 700px;
        color: inherit;
        background-color: inherit;
        text-decoration: inherit;
      }

      .item {
        width: 100%;
        margin-bottom: 10px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Base URL of the Requirements Bazaar instance to work with.
       */
      baseUrl: { type: String },
      projectId: { type: Number },
      categories: { type: Array },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.projectId = 2;
    this.categories = [];
  }

  render() {
    return html`
      ${this.categories.map(
        category => html`
          <a
            href="https://requirements-bazaar.org/projects/${category.projectId}/categories/${category.id}"
            target="_blank"
          >
            <reqbaz-category-card
              class="item"
              name=${category.name}
              description=${category.description}
            >
            </reqbaz-category-card>
          </a>
        `,
      )}
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.fetchCategories();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'projectId') {
        this.categories = [];
        this.fetchCategories();
      }
    });
  }

  async fetchCategories() {
    const url = `${this.baseUrl}projects/${this.projectId}/categories`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    Array.prototype.push.apply(this.categories, jsonResponse);
    // manually trigger an update, because update happens within Array
    this.requestUpdate();
  }
}
