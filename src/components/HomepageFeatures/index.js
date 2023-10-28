import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hello',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident.
      </>
    ),
  },
  {
    title: 'Hello',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident.
      </>
    ),
  },
  {
    title: 'Hello',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx("col col-4--md")}>
      <div className={styles.card}>
        <div>
          <Svg className={styles.icon} role="img" />
        </div>
        <h2>Hello</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident.</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <h1 className="text--center margin-vert--lg">PTLS features</h1>
        <div className="row margin-vert--xs">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}