import React from 'react'
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import LandingHeader from '../components/LandingHeader'
import {Fragment} from "react";
import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/style.css'

const FeedPage = () => {
    return (
        <Fragment>
            <LandingHeader/>
            <div id="header">
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem>Dashboard</MenuItem>
                        <hr/>
                        <SubMenu title="Components" open={true}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <hr/>
                    </Menu>
                </ProSidebar>
            </div>
        </Fragment>
    )
}

export default FeedPage