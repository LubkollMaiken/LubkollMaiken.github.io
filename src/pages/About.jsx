import React from 'react'
import Layout from '../components/Layout'
import { aboutMeData } from '../data/aboutMeData'
import "../assets/fonts/fonts.css"

export default function About() {
    return (
        <Layout>
            
             <div class="container text-start ">
                    <div class="row">
                        <div className="col-6 " style={{ whiteSpace: 'pre-line' }}>
                            <div className="Header economica-regular fs-3 mb-5 mt-5 text-start" >About me</div>
                            <div className="lato-regular ">{aboutMeData.aboutMeDescription}</div>
                        </div>
                        <div className="col-6 text-bg-primary"></div>
                     
                    </div>
                  </div>
        </Layout>
    )
}
