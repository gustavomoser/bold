import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

export interface CellProps extends WithStylesProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    alignSelf?: AlignSelf
}

@withStyles
export class Cell extends React.PureComponent<CellProps> {
    render() {
        const { size, theme } = this.props
        const styles = {
            cell: {
                alignSelf: this.props.alignSelf,
                margin: '0.5rem 1rem',

                [theme.breakpoint.small]: {
                    margin: '0.25rem 0.5rem',
                },
            },

            autoSize: {
                flexGrow: 1,
            },

            fixedSize: {
                flexBasis: `calc((100% / 12 * ${size}) - 2rem)`,
                [theme.breakpoint.small]: {
                    flexBasis: `calc((100% / 12 * ${size}) - 1rem)`,
                },
            },

        }

        const classes = this.props.css(
            styles.cell,
            this.props.size ? styles.fixedSize : styles.autoSize
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
