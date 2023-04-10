import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ['../src/ui/@(components|templates)/**/storybook/stories.@(js|ts)x'],
  addons: ["@storybook/addon-links", '@storybook/addon-essentials', "@storybook/addon-interactions"],
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite'
  },
  previewHead: head => `
    ${head}
    <style>
      #root {
        display: grid !important;
        height: 100% !important;
        width: 100% !important;
        justify-content: center !important;
        align-items: center;
      }

      @media screen and (min-width: 90rem) {
        #root {
          padding: 3rem!important;
        }
      }

      .sbdocs-p {
        font-size: 17px !important;
      }
    </style>
  `,
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
}

export default config
