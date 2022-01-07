import { addParameters, setCustomElements } from '@open-wc/demoing-storybook';

addParameters({
  docs: {
    iframeHeight: '200px',
  },
  backgrounds: [
    { name: 'gray', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
  ],
});

async function run() {
  const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();

  setCustomElements(customElements);
}

run();
