import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact <strong className="brand-name">Us</strong></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Contact Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="03XX-XXXXXXX" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Your Query</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <NavLink to="" className="btn btn-outline-primary">Contact Us</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
