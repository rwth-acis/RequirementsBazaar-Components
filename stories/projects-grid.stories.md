```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../reqbaz-projects-grid.js';

export default {
  title: 'ReqbazProjectsGrid',
  component: 'reqbaz-projects-grid',
  decorators: [withKnobs, withWebComponentsKnobs],
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
export const Standard = () => html`
<div style="height:700px;">
  <reqbaz-projects-grid></reqbaz-projects-grid>
</div>
`;
```

## API

<sb-props of="reqbaz-projects-grid"></sb-props>
