import type { Preview } from '@storybook/react'

// if (process.env.STORYBOOK_LOKI) {
//   // Mock date API on visual regression testing
//   mockdate.set('2020-09-01 12:00:00')
// }

const preview: Preview = {
  parameters: {
    info: {
      inline: true,
      styles: {
        infoBody: {
          border: 'none',
          boxShadow: 'none',
          marginTop: 0,
          marginBottom: 0,
          padding: '20px 40px',
        },
        infoPage: {
          padding: '0 5px 0 5px',
        },
        infoStory: {
          padding: '0 45px 0 45px',
        },
      },
    },
  },
}

export default preview
