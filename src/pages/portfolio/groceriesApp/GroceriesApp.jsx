import React from 'react'
import Layout from '../../../components/Layout'
import P_Header from '../../../components/portfolio/P_Header'
import { portfolioData } from '../../../data/portfolioData'
import P_Carousel from '../../../components/portfolio/P_Carousel'
import "../../../assets/fonts/fonts.css"
import P_LayoutTable from '../../../components/portfolio/P_LayoutTable'

export default function GroceriesApp() {

    //portfolioData[0].titel
    return (
        <div>


            <Layout>
                <P_Header titel={portfolioData[0].title} subtitel={portfolioData[0].shortDescription}></P_Header>
                <P_Carousel></P_Carousel>
                <div className="titel mt-5">

                    <P_LayoutTable name="Overview">
                        <div>
                            {portfolioData[0].description} Plattform: Andorid Devices
                        </div>

                    </P_LayoutTable>

                

                    <div className="border-bottom border-dark-subtle"></div>

                    <P_LayoutTable name="Frontend">
                        <div>
                            {portfolioData[0].description}
                        </div>

                    </P_LayoutTable>

                    <div className="border-bottom border-dark-subtle"></div>

                    <P_LayoutTable name="Backend">
                        <div>
                            {portfolioData[0].description}
                        </div>

                    </P_LayoutTable>

                    <div className="border-bottom border-dark-subtle"></div>

                    <P_LayoutTable name="Connection Structure">
                        {portfolioData[0].projectDescription_1}
                    </P_LayoutTable>

                    <div className="border-bottom border-dark-subtle"></div>

                    <P_LayoutTable name="Security">
                        {portfolioData[0].projectDescription_1}
                    </P_LayoutTable>

                        <div className="border-bottom border-dark-subtle"></div>

                    <P_LayoutTable name="Technologies & Tools">
                        <p >{portfolioData[0].technologies.map((data, index) => (
                                    <div class="d-inline-flex  border rounded-1 ms-2 me-2 mt-1 p-1 bg-body-tertiary bg-opacity-50">
                                      {data}
                                    </div>
                                  ))} </p>
           
                        

                    </P_LayoutTable>


                </div>


            </Layout>
        </div>
    )
}
