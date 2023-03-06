import {useState} from 'react';
const Jkl = () => {
    const [qwe, wer] = useState({ert: 2});
    return (
        <div>
            <button onClick={() => wer({...qwe, ert: qwe.ert + 1})}>
                Lvp
            </button>

            <h1>{qwe.ert}</h1>

            <button onClick={() => wer({...qwe, ert: qwe.ert - 2})}>
                Poi
            </button>
        </div>
    )
}

export default Jkl