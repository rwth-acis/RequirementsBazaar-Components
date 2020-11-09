```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../reqbaz-comments-thread.js';

export default {
  title: 'ReqbazCommentsThread',
  component: 'reqbaz-comments-thread',
  decorators: [withKnobs, withWebComponentsKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Reqbaz Comments Thread

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
import 'reqbaz-comments-thread/reqbaz-comments-thread.js';
```

```js preview-story
export const Standard = () => html`
  <reqbaz-comments-thread></reqbaz-comments-thread>
`;
```

## API

<sb-props of="reqbaz-comments-thread"></sb-props>
