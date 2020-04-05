import { html, css, LitElement } from 'lit-element';
import '@appnest/masonry-layout';

export class ReqbazRequirementsGrid extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      #container {
        width: 100%;
        max-width: 1279px;
        justify-content: center;
      }

      a {
        color: inherit;
        background-color: inherit;
        text-decoration: inherit;
      }

      .card {
        flex-direction: column;
        border: 1px solid white;
        box-sizing: border-box;
        padding: 15px 10px;
        background-color: white;
        font-family: "Roboto";
      }

      .card:hover {
        border: 1px solid #97A0A4;
      }

      .card .name {
        width: 100%;
        font-weight: 500;
        font-size: 18px;
      }

      .card .description {
        width: 100%;
        margin-top: 10px;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
      }

    `;
  }

  static get properties() {
    return {
      loading: { type: Boolean },
      requirements: { type: Array },
      /**
       * Base URL of the requirements bazaar instance to work with.
       */
      baseUrl: { type: String },
      category: { type: Number },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
  }
  
  render() {
    if (this.loading) {
      return html`
        <p>Loading Requirements...</p>
      `;
    }

    return html`
      <div id="container">
        <masonry-layout>
          ${this.requirements.map(requirement => html`
            <a href="https://requirements-bazaar.org/projects/2/categories/2/requirements/${requirement.id}" target="_blank">
              <div class="card">
                <div class="name">${requirement.name}</div>
                <div class="description">${requirement.description}</div>
              </div>
            </a>
          `)}
        </masonry-layout>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.requirements) {
      this.fetchRequirements();
    }
  }

  async fetchRequirements() {
    this.loading = true;

    const url = `${this.baseUrl}categories/${this.category}/requirements?page=0&per_page=200&sort=-date&state=open&search=`
    const response = await fetch(url);
    const jsonResponse = await response.json();
    this.requirements = jsonResponse;
    this.loading = false;
  }

}
