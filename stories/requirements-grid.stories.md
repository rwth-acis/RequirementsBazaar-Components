```js script
import { html } from '@open-wc/demoing-storybook';
import '../reqbaz-requirements-grid.js';

export default {
  title: 'ReqbazRequirementsGrid',
  component: 'reqbaz-requirements-grid',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ReqbazRequirementsGrid

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
  <reqbaz-requirements-grid category="2"></reqbaz-requirements-grid>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <reqbaz-requirements-grid title="Hello World"></reqbaz-requirements-grid>
`;
```
