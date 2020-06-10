import React from 'react';
import Layout from '../components/layout';
import LeftColLayout from '../components/leftColLayout';
import './mystyles.scss';

const avatar = require('../../public/github-pic.jpg');

const ArticlesPage = () => {
  return (
    <Layout>
      <LeftColLayout
        leftColChildren={
          <img src={avatar} alt='stephen-bradley.com profile'></img>
        }
        mainBodyChildren={
          <div>
            <h1>words</h1>
          </div>
        }
      >
      </LeftColLayout>
    </Layout>
  )
}
export default ArticlesPage