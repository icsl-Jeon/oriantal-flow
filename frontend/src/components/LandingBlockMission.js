import React from 'react'
import {Button} from "react-bootstrap";


const BlockMission = () => {
    return (
        <div className=" d-flex flex-column justify-content-center " style={{height: "327px"}}>
            <div className="display-3 mb-3"> Mission block</div>
            <div className="display-5 mb-0"> Supporting message ...</div>
            <div>
                <button className="btn btn-primary mt-4">
                    Join
                </button>
            </div>
        </div>
    )
}
export default BlockMission