```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../reqbaz-project-card.js';

export default {
  title: 'ReqbazProjectCard',
  component: 'reqbaz-project-card',
  decorators: [withKnobs, withWebComponentsKnobs],
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
export const Standard = () => html`
  <reqbaz-project-card></reqbaz-project-card>
`;
```

## API

<sb-props of="reqbaz-project-card"></sb-props>
