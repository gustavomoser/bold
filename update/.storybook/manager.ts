import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'Bold',
  brandUrl: 'https://github.com/laboratoriobridge/bold',
})

addons.setConfig({
  theme,
  panelPosition: 'right',
})
