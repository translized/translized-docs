/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  translizedDocs: [
    'getting-started',
    {
      type: 'category',
      label: 'API',
      items: [
        'api/authentication',
        {
          type: 'category',
          label: 'Project',
          collapsed: true,
          items: [
            'api/project/project-list',
            'api/project/project-details',
            'api/project/add-project',
            'api/project/export-all-project-languages',
            'api/project/export-project-language',
          ],
        },
        {
          type: 'category',
          label: 'Language',
          collapsed: true,
          items: [
            'api/language/project-languages',
            'api/language/available-languages',
            'api/language/add-language',
            'api/language/delete-language',
          ],
        },
        {
          type: 'category',
          label: 'Term',
          collapsed: true,
          items: [
            'api/term/terms-list',
            'api/term/get-term',
            'api/term/add-term',
            'api/term/update-term',
            'api/term/delete-term',
          ],
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        'cli/basics',
        {
          type: 'category',
          label: 'Instalation',
          collapsed: true,
          items: [
            'cli/homebrew',
            {
              type: 'category',
              label: 'Manual',
              collapsed: true,
              items: [
                'cli/manual/ios',
                'cli/manual/android',
                'cli/manual/universal',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Commands',
          collapsed: true,
          items: [
            'cli/commands/init',
            'cli/commands/upload',
            'cli/commands/download',
          ],
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'SDK',
      items: ['sdk/ios', 'sdk/android'],
      collapsed: true,
    },
  ],
  translizedFeatures: [
    'features/overview',
    'features/continuous-localization-automations',
    'features/machine-translations',
    'features/human-translations',
    'features/translation-history',
    'features/translation-memory',
    'features/screenshots',
    'features/over-the-air',
  ],
  translizedGuides: [
    'guides/getting-started',
  ]
};

module.exports = sidebars;
