import { Cell, Grid } from '../../lib'
import * as colors from '../../lib/styles/colors'

import { Pallete } from './Pallete'

export const PalleteList = () => {
  // Put gray first
  const colorNames = Object.keys(colors).sort((a, b) => (a === 'gray' ? -1 : a > b ? 1 : -1))

  return (
    <>
      <Grid justifyContent='flex-start' wrap>
        {colorNames.map((color: string) => (
          <Cell key={color} style={{ flex: 0 }}>
            <Pallete title={capitalize(color)} pallete={(colors as any)[color]} />
          </Cell>
        ))}
      </Grid>
    </>
  )
}

const capitalize = (str: string) => str.charAt(0).toLocaleUpperCase() + str.substr(1)
