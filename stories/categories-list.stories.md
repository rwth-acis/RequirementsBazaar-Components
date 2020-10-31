```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../reqbaz-categories-list.js';

export default {
  title: 'ReqbazCategoriesList',
  component: 'reqbaz-categories-list',
  decorators: [withKnobs, withWebComponentsKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Reqbaz Categories List

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
npm i reqbaz-components
```

```js
import 'reqbaz-categories-list/reqbaz-categories-list.js';
```

```js preview-story
export const Standard = () => html`
  <reqbaz-categories-list></reqbaz-categories-list>
`;
```

## API

<sb-props of="reqbaz-categories-list"></sb-props>
