import {AppButtonComponent} from '../app/app-button.component';
import {Story} from '@storybook/angular';

import {Meta} from '@storybook/angular/types-6-0';

export default {
  title: 'Javier/Button',
  component: AppButtonComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;
const template: Story<AppButtonComponent> = (args) => ({
  component: AppButtonComponent,
  props: args,
});

export const primary = template.bind({});
