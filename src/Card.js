import React from 'react'
import { NavLink } from 'react-router-dom'
function Card(props) {
    return (
        <div>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card text-center" >
                                    <img className="card-img-top" src={props.imgSrc} alt="Card image here" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">{props.text}</p>
                                        <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card
