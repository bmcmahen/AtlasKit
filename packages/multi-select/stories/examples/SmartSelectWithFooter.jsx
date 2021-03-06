import React from 'react';
import MultiSelect from '@atlaskit/multi-select';
import AddIcon from '@atlaskit/icon/glyph/add';

const selectItems = [
  {
    items: [
      { content: 'Quote builder form', value: 'comp1' },
      { content: 'Sidebar', value: 'comp2' },
      { content: 'Navigation', value: 'comp3' },
      // { content: 'Login', value: 'comp4' },
      // { content: 'Directory', value: 'comp5' },
      // { content: 'Payment gateway', value: 'comp6' },
      // { content: 'Email system', value: 'comp7' },
      // { content: 'Some other component', value: 'comp8' },
      // { content: 'Random name', value: 'comp9' },
      // { content: 'Cats everywhere!!', value: 'comp10' },
      // { content: 'Another awesome component', value: 'comp11' },
    ],
  },
];

const FooterWithLink = {
  appearance: 'primary',
  content: 'Create new component',
  elemBefore: <AddIcon label="" />,
  onActivate: () => {
    // this looks a bit weird, but it can't be a link because of the accessibility issues
    window.location.href = 'http://atlassian.com';
  },
};

const FooterWithoutLink = {
  appearance: 'primary',
  content: 'Create new component',
  elemBefore: <AddIcon label="" />,
  onActivate: () => {
    console.log('Footer click! Do something!');
  },
};

const FooterJustText = {
  content: 'Just some text here',
};

export default (
  <div>
    <MultiSelect
      footer={FooterWithLink}
      items={selectItems}
      label="How to behave like a link"
      placeholder="Choose a component"
      shouldFitContainer
      isOpen
    />
    <MultiSelect
      footer={FooterWithoutLink}
      items={selectItems}
      label="How to behave like not a link"
      placeholder="Choose a component"
      shouldFitContainer
    />
    <MultiSelect
      footer={FooterJustText}
      items={selectItems}
      label="How not to behave at all"
      placeholder="Choose a component"
      shouldFitContainer
    />
    <MultiSelect
      footer={FooterJustText}
      shouldAllowCreateItem
      items={selectItems}
      label="shouldAllowCreateItem should trump footer"
      placeholder="Choose a component"
      shouldFitContainer
    />
  </div>
);
