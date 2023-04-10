import { Meta, StoryObj } from '@storybook/react'
import { Button } from '..'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    text: 'Click Here',
    size: 'large',
    color: 'blue',
    disabled: false,
    fullWidth: false
  }
}

// export default {
//   title: 'Atoms/Button',
//   component: Button,
//   args: {
//     text: 'Click Here',
//     size: 'large',
//     color: 'blue',
//     disabled: false,
//     fullWidth: false
//   },
//   argTypes: {
//     size: {
//       options: ['small', 'medium', 'large'],
//       control: { type: 'inline-radio' }
//     },
//     color: {
//       options: ['gray', 'blue'],
//       control: { type: 'inline-radio' }
//     },
//     onClick: { action: 'onClick' }
//   },
//   parameters: {
//     controls: { exclude: ['icon'], sort: 'requiredFirst' }
//   }
// } as ComponentMeta<typeof Button>
//
// export const Basic = {}
