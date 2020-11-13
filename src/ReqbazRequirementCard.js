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
        box-sizing: border-box
        width: 100%;
        max-width: 800px;
        padding: 10px 16px;
        color: var(--test-component-two-text-color, #000);
        border-radius: 8px;
        box-shadow: 0 1px 2px lightgrey;
        font-family: system-ui;
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
        color: #5d5d5d;
      }

      .subtitle {
        font-weight: bold;
      }

      #actionButtons {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      .button {
        display: flex;
        height: 36px;
        flex: 1;
        margin: 5px;
        border-radius: 6px;
        background: #d3d3d3;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #5d5d5d;
      }

      #actionButtons :first-child {
        margin-left: 0px;
      }

      .button:hover {
        background: #e4e4e4;
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
      creationDate: { type: String },
      lastUpdated: { type: String },
      creator: { type: String },
      comments: { type: Array },
      numberOfComments: { type: Number },
      numberOfFollowers: { type: Number },
      numberOfAttachments: { type: Number },
    };
  }

  constructor() {
    super();
    this.baseUrl = 'https://requirements-bazaar.org/bazaar/';
    this.requirementId = 2337;
    this.name = '';
    this.description = '';
    this.creator = '';
    this.comments = [];
    this.numberOfComments = 0;
    this.numberOfFollowers = 0;
    this.numberOfAttachments = 0;
  }

  render() {
    // use https://day.js.org/docs/en/installation/browser for date
    return html`
      <div id="container">
        <div id="header">
          <div id="name">${this.name}</div>
          <div class="icon">${starIcon}</div>
        </div>
        <div id="lastUpdated">${this.creationDate} by ${this.creator}</div>
        <div id="description">${this.description}</div>

        <div class="line"></div>

        <div id="actionButtons">
          <div id="followersButton" class="button">${this.numberOfFollowers} Followers</div>
          <div id="commentsButton" class="button">${this.numberOfComments} Comments</div>
          <div id="attachmentsButton" class="button">${this.numberOfAttachments} Attachments</div>
        </div>

        <div id="comments">
          <div class="subtitle">Comments</div>
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
    this.creationDate = requirementJson.creationDate;
    this.numberOfComments = requirementJson.numberOfComments;
    this.numberOfFollowers = requirementJson.numberOfFollowers;
    this.numberOfAttachments = requirementJson.numberOfAttachments;
  }
}
