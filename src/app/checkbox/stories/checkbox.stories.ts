import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../checkbox.component';
import { Story } from '@storybook/angular/types-6-0';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Checkbox',
    // The component related to the Stories
    component: CheckboxComponent,
    decorators: [
      // The necessary modules for the component to work on Storybook
      moduleMetadata({
        declarations: [CheckboxComponent],
        imports: [CommonModule],
      }),
    ],
  };
  // This creates a Story for the component
  const Template: Story<CheckboxComponent> = () => ({
    component: CheckboxComponent,
    props: {
        color: 'primary',
        content: 'Visit Storybook',
        href: 'https://storybook.js.org/',
        target: '_blank',
      },
    template: `<section class="example-section">
    <mat-checkbox class="example-margin">Check me!</mat-checkbox>
    <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
  </section>`,
  });
  export const Base = Template.bind({});
  // Other stories could be added here as well, all you have to do is export them along!