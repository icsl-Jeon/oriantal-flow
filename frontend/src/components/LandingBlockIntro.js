import React from 'react'
import styles from '../styles/style.module.css'
import {Button} from "react-bootstrap";

const Description = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center flex-fill mb-lg-1">
            <div className="">
                <h1>Title</h1>
            </div>
            <div className="">
                Intro keyword
            </div>
        </div>
    )
}

const Illustration = (props) => {
    return (
        <div className="border d-flex flex-fill">
            Illustration figure
        </div>
    )
}

const BlockIntro = (props) => {
    const order = props.text_align === "left" ? " flex-row" : " flex-row-reverse"


    return (
        <div className={"d-flex" + order + " justify-content-center"}
             style={{height: "327px", marginLeft: "200px", marginRight: "200px"}}>
            <Description/>
            <Illustration/>
        </div>
    )
}
export default BlockIntro