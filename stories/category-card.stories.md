```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../reqbaz-category-card.js';

export default {
  title: 'ReqbazCategoryCard',
  component: 'reqbaz-category-card',
  decorators: [withKnobs, withWebComponentsKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Reqbaz Category Card

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
import 'reqbaz-category-card/reqbaz-category-card.js';
```

```js preview-story
export const Simple = () => html`
  <reqbaz-category-card></reqbaz-category-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <reqbaz-category-card></reqbaz-category-card>
`;
```
