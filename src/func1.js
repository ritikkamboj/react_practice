import React, { memo } from 'react'

function Func1({ value, getAdjective }) {
    console.log("this component getting rendered ");

    return (
        <>
            <div>the valeu is : {value}</div>

            <button onClick={() => getAdjective()}> here we get the value return by function is {getAdjective()}</button>

        </>


    )
}

export default memo(Func1);

// use of memo implies that if we gets new props value then only re render , otherwise remain as it is 