import React, { memo } from 'react'

const Title = () => {
    console.log("Rendering Title");
    return (
        <div>useCallback Hook</div>
    )
}
// momo ==> now re-render only there is change in this prop or state.basically to avoid re-rendering everytime.
export default memo(Title)
