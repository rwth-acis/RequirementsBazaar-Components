```js script
import { html, withKnobs, withWebComponentsKnobs} from '@open-wc/demoing-storybook';
import '../reqbaz-requirement-card.js';

export default {
  title: 'ReqbazRequirementCard',
  component: 'reqbaz-requirement-card',
  decorators: [withKnobs, withWebComponentsKnobs],
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
npm i reqbaz-components
```

```js
import 'reqbaz-requirements-grid/reqbaz-requirements-grid.js';
```

```js preview-story
export const Standard = () => html`
  <reqbaz-requirement-card></reqbaz-requirement-card>
`;
```

## API

<sb-props of="reqbaz-requirement-card"></sb-props>
