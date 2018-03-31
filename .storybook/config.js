import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/typesStory');
  require('../stories/positionsStory');
  require('../stories/themesStory');
  require('../stories/transitionsStory');
  require('../stories/optionsStory');
  // You can require as many stories as you need.
}

configure(loadStories, module);