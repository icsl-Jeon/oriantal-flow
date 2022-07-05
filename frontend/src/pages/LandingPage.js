import React from 'react'
import LandingHeader from '../components/LandingHeader'
import BlockMission from '../components/LandingBlockMission'
import BlockIntro from '../components/LandingBlockIntro'

import {Fragment} from "react";

const LandingPage = () => {
    return (

        <Fragment>
            <LandingHeader>
            </LandingHeader>

            <main>
                <BlockMission>
                </BlockMission>
                <BlockIntro text_align="left">
                </BlockIntro>
                <BlockIntro text_align="right">
                </BlockIntro>
                <BlockIntro text_align="left">
                </BlockIntro>
            </main>

        </Fragment>

    )
}

export default LandingPage