import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits,loading} = useSelector((state)=>state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    console.log("loaing",tuits)
    return(
        <>
        <ul className="list-group">
            {tuits.map(tuit =>
                                   <TuitItem
                                       key={tuit._id} tuit={tuit}/> )
            }
        </ul>
        </>
    );
};
export default TuitList;