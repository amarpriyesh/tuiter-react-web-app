import React, { useState } from "react";

function Asd() {
    const [ewq, wer] = useState([321, 432, 543, 654, 765])

    const tre = (ytr, uyt) => {
        const poi = ewq.map(iuy => iuy === ytr ? uyt : iuy)
        wer(poi)
    }
    return(
        <div>
            <ul>
                {ewq.map(oiu => <li>{oiu}</li>)}
            </ul>
            <button onClick={() => tre(543, 999)}>BUTTON</button>
        </div>
    )
}
export default Asd