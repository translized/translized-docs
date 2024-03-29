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
            alt="Translized Logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">Translized Documentation</h1>
          <p className="hero__subtitle">
            Get started with guides for localizing your products, learn more about how to use Translized and better understand Translized features.
          </p>
            <Link
              className="button button--outline button--primary button--lg hero-button"
              to={useBaseUrl('docs/guides/getting-started')}
            >
              Getting Started
            </Link>

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
              to={useBaseUrl('docs/features/keys')}
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
