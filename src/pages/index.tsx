import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import ProjectTemplate from "../templates/projectTemplate";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello.</h1>
    <h1>I'm Frank.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ProjectTemplate />
  </Layout>
);

export default IndexPage;
