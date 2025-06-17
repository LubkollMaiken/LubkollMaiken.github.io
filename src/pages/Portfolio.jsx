import React from 'react'
import Layout from '../components/Layout'
import { portfolioData } from '../data/portfolioData'
import Card from '../components/Card'
import Hero from '../components/Hero'
export default function Portfolio() {
  return (
    <Layout>
      <Hero/>
      <div class="container text-center">
        <div class="row row-cols-2">
          {portfolioData.map((data, index) => (
            <div class="col">
              <Card title={data.title} description={data.shortDescription} page={data.page}></Card>
            </div>
          ))}
        </div>
      </div>

    </Layout>


  )
}
