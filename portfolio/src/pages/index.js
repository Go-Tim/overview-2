import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Applications } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Applications />
    <Contact />
  </Layout>
);
