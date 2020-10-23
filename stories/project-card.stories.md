```js script
import { html } from '@open-wc/demoing-storybook';
import '../reqbaz-project-card.js';

export default {
  title: 'Reqbaz Project Card',
  component: 'reqbaz-project-card',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Reqbaz Project Card

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
import 'reqbaz-project-card/reqbaz-project-card.js';
```

```js preview-story
export const Simple = () => html`
  <reqbaz-project-card></reqbaz-project-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <reqbaz-project-card title="Hello World"></reqbaz-project-card>
`;
```
