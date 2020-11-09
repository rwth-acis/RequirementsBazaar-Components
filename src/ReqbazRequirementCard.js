import { html, css, LitElement } from 'lit-element';
import '../reqbaz-comments-thread.js';
import { starIcon } from './reqbaz-icons.js';

/**
 * Here is a description of my web component.
 *
 * @element reqbaz-requirement-card
 *
 */
export class ReqbazRequirementCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 800px;
        padding: 10px 16px;
        color: var(--test-component-two-text-color, #000);
        border: 1px solid black;
        font-family: Roboto;
      }

      #container {
      }

      .line {
        margin: 10px 0;
        background: #c6c6c6 no-repeat scroll center;
        width: 100%;
        height: 1px;
      }

      .icon {
        width: 24px;
        height: 24px;
        fill: #757575;
        margin-right: 10px;
      }

      #header {
        display: flex;
        flex-direction: row;
      }

      #name {
        flex: 1;
        font-size: 20px;
      }

      #lastUpdated {
        font-size: 14px;
      }

      .subtitle {
        font-weight: bold;
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
      name: { type: String },
      description: { type: String },
      lastUpdated: { type: String },
      creator: { type: String },
      comments: { type: Array },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.requirementId = 2338;
    this.name = '';
    this.description = '';
    this.creator = '';
    this.comments = [];
  }

  render() {
    return html`
      <div id="container">
        <div id="header">
          <div id="name">${this.name}</div>
          <div class="icon">${starIcon}</div>
        </div>
        <div id="lastUpdated">${this.lastUpdatedDate} by ${this.creator}</div>
        <div id="description">${this.description}</div>

        <div class="line"></div>

        <div id="comments">
          <div class="subtitle">Comments</div>
          No comments yet...
          <reqbaz-comments-thread requirementId=${this.requirementId}></reqbaz-comments-thread>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    // the fetch is anyway called when the property changes
    // this.fetchRequirement();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'requirementId') {
        this.fetchRequirement();
      }
    });
  }

  async fetchRequirement() {
    const url = `${this.baseUrl}requirements/${this.requirementId}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();

    // update properties
    this._populateProperties(jsonResponse);
  }

  _populateProperties(requirementJson) {
    this.name = requirementJson.name;
    this.description = requirementJson.description;
    this.creator = requirementJson.creator.userName;
  }
}
