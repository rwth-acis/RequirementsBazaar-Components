```js script
import { html } from '@open-wc/demoing-storybook';
import '../reqbaz-requirement-card.js';

export default {
  title: 'ReqbazRequirementCard',
  component: 'reqbaz-requirement-card',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ReqbazRequirementCard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add test-component-four
```

```js
import 'reqbaz-requirements-grid/reqbaz-requirements-grid.js';
```

```js preview-story
export const Simple = () => html`
  <reqbaz-requirement-card></reqbaz-requirement-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <reqbaz-requirement-card title="Hello World"></reqbaz-requirement-card>
`;
```
