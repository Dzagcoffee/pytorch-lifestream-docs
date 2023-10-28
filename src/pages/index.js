import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutPTLSText from '@site/src/components/AboutPytorchLifestreamText';

import styles from './index.module.css';

function scrollDown() {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className="main-page">
      <header className={clsx('hero')}>
        <div className="container text--center">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="custom-button button button--primary button--lg"
              to="/docs/intro">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <div className="main-page-arrow text--center">
        <img src="img/arrow.svg" alt="" onClick={scrollDown}/>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutPTLSText />
      </main>
    </Layout>
  );
}