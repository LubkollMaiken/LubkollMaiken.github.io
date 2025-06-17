import React from 'react'
import "./Card.css"
import "../assets/fonts/fonts.css"

export default function Card({title,description}) {
    return (
        <div className="card mb-4 shadow-sm" style={{ width: '22rem' }}>
            <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text lato-regular ">{description}</p>
                </div>
        </div>
    )
}
