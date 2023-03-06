import React, { useState } from "react";
function Xyz1() {
    const [qwe, wer] = useState([123, 234, 345, 456, 567])
    const ert = (rty) => {
        const tyu = qwe.filter(yui => yui != rty)
        wer(tyu)
    }
    return(
        <div>
            <ul>
                {qwe.map(uio => <li>{uio}</li>)}
            </ul>
            <button onClick={() => ert(345)}>BUTTON</button>
        </div>
    )
}

export default Xyz1