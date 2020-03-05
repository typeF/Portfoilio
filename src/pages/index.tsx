import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import AboutTemplate from "../templates/aboutTemplate";
import ContactTemplate from "../templates/contactTemplate";
import HeroTemplate from "../templates/heroTemplate";
import ProjectTemplate from "../templates/projectTemplate";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroTemplate />
    {/* <AboutTemplate /> */}
    <ProjectTemplate />
    <ContactTemplate />
  </Layout>
);

export default IndexPage;
