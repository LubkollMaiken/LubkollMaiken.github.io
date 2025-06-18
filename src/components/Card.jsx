import React from 'react'
import "./Card.css"
import "../assets/fonts/fonts.css"
import { Link } from 'react-router-dom'

export default function Card({title,description,page}) {
    return (
        <div className="card mb-4 shadow-sm" style={{ width: '22rem' }}>
            <img className="img-fluid" src="/MockUpSmartphone.jpg" class="card-img-top" alt="..."/>
                <div class="card-body text-start">
                    <p class="card-text economica-regular fs-3 ">{title}</p>
                    <p class="card-text lato-regular  ">{description}</p>
                    <Link to={page}class="btn btn-outline-secondary">View project</Link>
                </div>
        </div>
    )
}
