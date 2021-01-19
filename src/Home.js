import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import web from "./Imgs/img-1.png"
function Home() {
    return (
        <div>
            <Common
            name="DevSoft"
            title='Grow Your Business With'
            subTitle='Turing your vision into reality'
            imgSrc={web}
            btnText="Get Started"
            visit="/services"/>
            </div>
    )
}

export default Home
