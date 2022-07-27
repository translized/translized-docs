// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Translized Documentation',
  tagline: 'Reach audiences worldwide with an easy-to-use software localization platform that ensures high quality translation and timely communication.',
  url: 'https://docs.translized.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/translized/translized-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Translized',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/authentication',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs/api/authentication',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/translized/',
              },
              {
                label: 'Capterra',
                href: 'https://www.capterra.com/p/240107/Translized/',
              },
              {
                label: 'GetApp',
                href: 'https://www.getapp.com/website-ecommerce-software/a/translized',
              },
              {
                label: 'Finances Online',
                href: 'https://reviews.financesonline.com/p/translized',
              },
              {
                label: 'SourceForge',
                href: 'https://sourceforge.net/software/product/Translized',
              },
              {
                label: 'Product Hunt',
                href: 'https://www.producthunt.com/posts/translized',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/translized',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Translized.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
