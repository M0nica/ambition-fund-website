import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Conferences from "../components/sections/conferences"
import Footer from "../components/sections/footer"

const OpportunityPage = () => (
  <Layout>
    <SEO title="Opportunities | Ambition Fund" />
    <Navigation />
    <Conferences />
    <Footer />
  </Layout>
)

export default OpportunityPage
