import * as React from "react";

import Layout from "../components/structure/layout"
import Button from '../components/elements/button/button';
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Style Guide</h1>

    <div class="style-section">
      <h2 className="heading">Buttons</h2>

      <div className="panel">
        <aside className="panel__sidebar">
          <h3 className="panel__heading">Rounded &mdash; Fills</h3>
        </aside>
        <div className="panel__main">
          <Button element="button" buttonType={'button'} theme="primary" outline>Hello</Button>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
