import { html, css, LitElement } from 'lit';
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
        margin: 0 24px;
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
        font-family: 'Roboto';
      }

      .card:hover {
        border: 1px solid #97a0a4;
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
       * Base URL of the Requirements Bazaar instance to work with.
       */
      baseUrl: { type: String },
      category: { type: Number },
      perPage: { type: Number },
      _intersectionObserver: { type: Object },
      _page: { type: Number },
      _isSentinelVisible: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.requirements = [];
    this.perPage = 10;
    this._isSentinelVisible = true;
  }

  render() {
    return html`
      <div id="container">
        <masonry-layout>
          ${this.requirements.map(
            requirement => html`
              <a
                href="https://requirements-bazaar.org/projects/2/requirements/${requirement.id}"
                target="_blank"
              >
                <div class="card">
                  <div class="name">${requirement.name}</div>
                  <div class="description">${requirement.description}</div>
                </div>
              </a>
            `,
          )}
        </masonry-layout>
        <div id="sentinel"></div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    // initialize page so fetching can start
    this._page = 0;
  }

  async fetchRequirements() {
    this.loading = true;

    const url = `${this.baseUrl}categories/${this.category}/requirements?page=${this._page}&per_page=${this.perPage}&sort=-date&state=open&search=`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (!this.requirements) {
      this.requirements = [];
    }
    Array.prototype.push.apply(this.requirements, jsonResponse);
    this.loading = false;
    if (jsonResponse.length > 0 && this._isSentinelVisible) {
      this._page += 1;
    }
  }

  firstUpdated() {
    const sentinel = this.shadowRoot.getElementById('sentinel');
    this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), {
      rootMargin: '0px 0px 400px 0px',
    });
    this._intersectionObserver.observe(sentinel);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === '_page') {
        this.fetchRequirements();
      }
    });
  }

  _handleIntersection(intersections) {
    const intersection = intersections[0];
    this._isSentinelVisible = intersection.isIntersecting;
    if (intersection.isIntersecting) {
      this._page += 1;
    }
  }
}
