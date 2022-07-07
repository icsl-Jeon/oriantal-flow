import React from 'react'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const BlockMission = () => {
    return (
        <div className=" d-flex flex-column justify-content-center " style={{height: "327px"}}>
            <div className="display-3 mb-3"> Mission block</div>
            <div className="display-5 mb-0"> Supporting message ...</div>
            <div>
                <Link to="/feed">
                    <button className="btn btn-primary mt-4">
                        Join
                    </button>

                </Link>

            </div>
        </div>
    )
}
export default BlockMission