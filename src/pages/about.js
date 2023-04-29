import * as React from 'react'
import Layout from '../components/layout'
import Seo from"../components/seo"
import {StaticImage} from "gatsby-plugin-image"
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
	   <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/mel-elias-hhegBj6iJ5E-unsplash.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
