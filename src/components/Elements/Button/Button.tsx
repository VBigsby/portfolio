import * as React from 'react'

export type ButtonProps = {
    children: React.ReactNode
    className?: string
    onMouseEnter?: any
    onMouseLeave?: any
}

export const Button = React.memo(
    ({ children, className, onMouseEnter, onMouseLeave }: ButtonProps): JSX.Element => (
        <button className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </button>
    )
)
