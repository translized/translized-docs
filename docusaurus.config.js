// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Translized Documentation',
  tagline: 'Official Translized Documentation',
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
          alt: 'Translized Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'guides/getting-started',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'features/strings',
            position: 'left',
            label: 'Features',
          },
          {
            href: 'https://github.com/translized',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: 'docs/getting-started',
              },
              {
                label: 'Features',
                to: 'docs/features/strings',
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
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocs: true,
          indexBlog: false,
          language: "en",
          indexDocSidebarParentCategories: 2,
          lunr: {
            titleBoost: 5,
            tagsBoost: 3,
            parentCategoriesBoost: 2,
            contentBoost: 1,
          }
        },
      ]
    ],
    staticDirectories: ['static']
};

module.exports = config;
