import React, { useState } from "react";
function Xyz({qwe = 10}) {
    const [rew,ert] = useState(qwe)
    const asd = () => ert(rew + 5)
    return(
        <div>
            <h1>{rew}</h1>
            <button onClick={asd}>BUTTON</button>
        </div>
    )
}
export default Xyz