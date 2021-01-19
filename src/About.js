import React from 'react'
import Common from './Common'
import web from './Imgs/img-2.png'

function About() {
    return (
        <div>
            <Common 
            name="Us"
            title='About'
            subTitle="We are the solution to your imagination. Turn your yusiness ideas into real-world business solution"
            imgSrc={web}
            btnText="Contact Us"
            visit="/contact" />
        </div>
    )
}

export default About
