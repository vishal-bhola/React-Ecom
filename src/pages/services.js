import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="Our Services"
    subtitle="We are at your service"
    heroclass="about-background"
    />
    <Dualinfoblock heading="How to Proceed" img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Infoblock heading="Our Free Services"/>
    <p>IF YOU DO NOT AGREE TO THE PROVISIONS OF THIS AGREEMENT OR ARE NOT SATISFIED WITH THE SERVICE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE YOUR USE OF THE SERVICE.</p>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}

`



export default ServicePage
