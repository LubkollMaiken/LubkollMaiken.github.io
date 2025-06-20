import React from 'react'
import "../../assets/fonts/fonts.css"

export default function P_Header({ titel,subtitel}) {
    return (
        <div className="Portfolio_Header ">


                    <div className=" economica-regular fs-2 d-block w-100 ">

                            <div class="text-center mt-4 mb-5 ">
                                <h1 className="economica-regular fs-1 mb-4">{titel}</h1>
                                <p className="economica-regular fs-3">{subtitel}</p>
                            </div>

                            
                        </div>
                    </div>





    )
}
