import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';

import clsx from 'clsx';

import styles from './index.module.css';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout permalink={'/'} description={siteConfig.tagline}>
      <div className={clsx(styles.heroBanner)}>
        <div className={clsx('container', styles.innerHeroBanner)}>
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">Translized Documentation</h1>
          {/* Create paragraph with lorem ipsum text */}
          <p className="hero__subtitle">
            Reach audiences worldwide with an easy-to-use software localization platform that ensures high quality translation and timely communication.
          </p>

          <div className={styles.gridButtonsWrapper}>
            <Link
              className="button button--outline button--primary button--lg hero-button"
              to={useBaseUrl('docs/api/authentication')}
            >
              API
            </Link>
            <Link
              className="button button--outline button--primary button--lg hero-button"
              to={useBaseUrl('docs/cli/homebrew')}
            >
              CLI
            </Link>
            <Link
              className="button button--outline button--primary button--lg hero-button"
              to={useBaseUrl('docs/sdk/ios')}
            >
              SDK
            </Link>
            <Link
              className="button button--outline button--primary button--lg hero-button"
              to={useBaseUrl('docs/features/overview')}
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
