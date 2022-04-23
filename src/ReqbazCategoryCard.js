import { html, css, LitElement } from 'lit';

/**
 * 
 * @element reqbaz-category-card
 *
 */
export class ReqbazCategoryCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 700px;
        font-family: Roboto;
        border: 1px solid #e8e8e8;
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      #content {
        padding: 8px;
      }

      #name {
        font-size: 22px;
      }

      #description {
        margin: 5px 0;
        font-size: 16px;
      }
    `;
  }

  static get properties() {
    return {
      categoryId: { type: Number },
      name: { type: String },
      description: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Frontend';
    this.description =
      'Post your requirements for the Requirements Bazaar Web app under this category.';
  }

  render() {
    return html`
      <div id="container">
        <div id="content">
          <div id="name">${this.name}</div>
          <div id="description">${this.description}</div>
        </div>
      </div>
    `;
  }
}
