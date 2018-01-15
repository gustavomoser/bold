import * as React from 'react'
import { Overlay } from 'react-overlays'

export type Placement = 'top' | 'right' | 'bottom' | 'left'

export interface PopoverProps {
    borderColor?: string
    className?: string
    color?: string
    onHide?: any
    placement?: Placement
    rootClose?: boolean
    show?: boolean
    target?: React.ReactNode | Function
}

export class Popover extends React.Component<PopoverProps> {
    render() {
        return (
            <Overlay
                onHide={this.props.onHide}
                placement={this.props.placement}
                rootClose={this.props.rootClose}
                show={this.props.show}
                target={this.props.target}
            >
                <PopoverContent
                    className={this.props.className}
                    borderColor={this.props.borderColor}
                    color={this.props.color}
                >
                    {this.props.children}
                </PopoverContent>
            </Overlay>
        )
    }

}

const PopoverContent = props => {
    const {
        style,
        children,
    } = props

    return (
        <div className='popover' style={{ ...style }}>
            <div className='popover-content'>
                {children}
            </div>
        </div>
    )
}
