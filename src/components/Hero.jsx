import React from 'react'
import { aboutMeData } from '../data/aboutMeData'
import "../assets/fonts/fonts.css"

export default function Hero() {
    return (
        <div className="HeroContainer economica-regular fs-3 mb-5 mt-5 " style={{ whiteSpace: 'pre-line' }}>
                <div >{aboutMeData.shortdescription}</div> 
            </div>

    )
}
