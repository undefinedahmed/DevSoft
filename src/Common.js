import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "./Imgs/img-1.png"

function Common(props) {
    return (
        <div>
            <section id="header" className="sec-home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 home-heading">
                                <h1>{props.title} <strong className="brand-name">{props.name}</strong></h1>
                                <h2 className="my-3">{props.subTitle}</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnText}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 header-img">
                                <img src={props.imgSrc} className="img-fluid" alt="Home Image"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common
