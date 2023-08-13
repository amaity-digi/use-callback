import React, { memo } from 'react'

const Count = ({ text, count }) => {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}
// momo ==> now re-render only there is change in this prop or state.basically to avoid re-rendering everytime.
export default memo(Count)
