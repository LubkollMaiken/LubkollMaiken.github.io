import React from 'react'

export default function P_LayoutTable({ children, name }) {
    return (
        <div className="ProjectDescriptionTable mt-5 mb-4 ">
            <div className="row">
                <div className="col-3">
                    <h2 className="economica-regular fs-4 text-start"> {name}</h2>
                </div>
                <div className="col-9 text-start lato-regular fs-6 ">
                    <p>{children}</p>
                </div>

            </div>
        </div>
    )
}
