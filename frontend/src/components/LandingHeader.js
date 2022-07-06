import React from 'react'
import {Button} from "react-bootstrap";

const brand_name = "ORIANTAL FLOW"

const Header = () => {
    return (
        <nav>
            <div className="d-flex justify-content-between align-items-center shadow-sm">
                <div className="m-1">
                    <h2 className="m-0 p-3 ">{brand_name}</h2>
                </div>
                <div className="mt-3">
                    <ul className="d-flex flex-row m-1">
                        {true &&
                        <Button type="button" className="btn btn-light btn btn-outline-primary  m-1">
                            Create
                        </Button>}
                        <Button className="btn btn-light btn-outline-primary  m-1">
                            Explore
                        </Button>
                        <Button className="btn btn-primary m-1">
                            Sign in
                        </Button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header