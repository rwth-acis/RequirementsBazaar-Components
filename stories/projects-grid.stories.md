```js script
import { html } from '@open-wc/demoing-storybook';
import '../reqbaz-projects-grid.js';

export default {
  title: 'ReqbazProjectsGrid',
  component: 'reqbaz-projects-grid',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ReqbazProjectsGrid

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
import 'reqbaz-projects-grid/reqbaz-projects-grid.js';
```

```js preview-story
export const Simple = () => html`
  <reqbaz-projects-grid></reqbaz-projects-grid>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <reqbaz-projects-grid title="Hello World"></reqbaz-projects-grid>
`;
```
