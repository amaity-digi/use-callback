import React, { memo } from 'react'

const Button = ({ handleClick, children }) => {
    console.log(`Rendering button ${children}`)
    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}
// momo ==> now re-render only there is change in this prop or state.basically to avoid re-rendering everytime.
export default memo(Button)
