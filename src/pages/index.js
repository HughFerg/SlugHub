import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <div style={{ fontSize: `600%`, height: `200%` }} >welcome to slughub, my dudes</div>
  </Layout>
)

export default IndexPage
